import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import { getActionClient, getEquivalentResourceByKey, getTeamAPIkeysOrThrow } from '../utils';
import { PlatformAction, TeamKey } from '../types';

export default class DefenderInvoke {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  log: Logger;
  hooks: any;
  teamKey?: TeamKey;

  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    this.log = Logger.getInstance();

    this.hooks = {
      'before:invoke:invoke': () => this.validateKeys(),
      'invoke:invoke': this.invoke.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  async invoke() {
    try {
      this.log.notice('========================================================');
      this.log.progress('logs', `Running Defender Invoke on stack function: ${this.options.function}`);
      const payload = JSON.parse((this.options as any)?.data ?? '{}');
      const client = getActionClient(this.teamKey!);
      const list = (await client.list()).items;
      const platformAction = getEquivalentResourceByKey<PlatformAction>(this.options.function!, list);
      if (platformAction) {
        const response = await client.runAction({
          actionId: platformAction.actionkId,
          data: payload,
        });
        this.log.notice(JSON.stringify(response, null, 2));
        if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(response, null, 2));
      } else {
        this.log.error(`No actions with identifier: ${this.options.function} found.`);
      }
      this.log.notice('========================================================');
    } catch (e) {
      this.log.tryLogDefenderError(e);
    }
  }
}

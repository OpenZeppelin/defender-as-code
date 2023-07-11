import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

// import { tailLogsFor } from '@openzeppelin/defender-autotask-client/lib/utils';

import { getActionClient, getEquivalentResourceByKey, getTeamAPIkeysOrThrow } from '../utils';
import { PlatformAction, TeamKey } from '../types';

export default class DefenderLogs {
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
      'before:logs:logs': () => this.validateKeys(),
      'logs:logs': this.logs.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  async logs() {
    try {
      this.log.notice('========================================================');
      this.log.progress('logs', `Running Defender Logs on stack function: ${this.options.function}`);
      const client = getActionClient(this.teamKey!);
      const list = (await client.list()).items;

      const defenderAction = getEquivalentResourceByKey<PlatformAction>(this.options.function!, list);

      // TODO: Update with Platform equivalent once I find it
      // if (defenderAction) await tailLogsFor(client, defenderAction!.actionId);
      // else this.log.error(`No action with stackResourceId: ${this.options.function} found.`);
      this.log.notice('========================================================');
    } catch (e) {
      this.log.tryLogPlatformError(e);
    }
  }
}

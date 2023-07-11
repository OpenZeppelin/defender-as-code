import Serverless from 'serverless';

import { Logging } from 'serverless/classes/Plugin';

import PlatformProvider from './provider';
import PlatformDeploy from './cmd/deploy';
import PlatformInfo from './cmd/info';
import PlatformRemove from './cmd/remove';
import PlatformLogs from './cmd/logs';
import PlatformInvoke from './cmd/invoke';

import Logger from './utils/logger';

class PlatformPlugin {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    Logger.getInstance(logging);

    this.serverless.setProvider('platform', new PlatformProvider(this.serverless) as any);
    this.serverless.pluginManager.addPlugin(PlatformDeploy);
    this.serverless.pluginManager.addPlugin(PlatformInfo);
    this.serverless.pluginManager.addPlugin(PlatformRemove);
    this.serverless.pluginManager.addPlugin(PlatformLogs);
    this.serverless.pluginManager.addPlugin(PlatformInvoke);
  }
}

module.exports = PlatformPlugin;

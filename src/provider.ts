import Serverless from 'serverless';

import { PlatformSchema, DefinitionsSchema, ResourcesSchema, ProviderSchema } from './types/schemas';

export default class PlatformProvider {
  constructor(serverless: Serverless) {
    serverless.configSchemaHandler.defineTopLevelProperty('platform', PlatformSchema);
    serverless.configSchemaHandler.defineProvider('platform', {
      definitions: DefinitionsSchema.definitions,
      provider: ProviderSchema,
      resources: ResourcesSchema,
    });
  }
}

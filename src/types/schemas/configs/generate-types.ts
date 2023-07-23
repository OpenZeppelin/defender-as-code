import { compile } from 'json-schema-to-typescript';
import { join } from 'path';
import { readdirSync, writeFileSync } from 'fs';

const SCHEMAS_FOLDER = join(__dirname, '../');
const TYPES_FOLDER = join(__dirname, '../../types');

const run = async (): Promise<void> => {
  const schemaPaths = readdirSync(SCHEMAS_FOLDER);

  const buildTypes = schemaPaths.map(async (schemaPath) => {
    if (schemaPath === 'definitions.schema.json') return;
    if (!schemaPath.endsWith('.json')) return;
    console.log('parsing schema: ', schemaPath);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const compiled = await compile(require(join(SCHEMAS_FOLDER, schemaPath)), schemaPath, {
      style: { singleQuote: true },
      additionalProperties: false,
      cwd: SCHEMAS_FOLDER,
    });
    writeFileSync(join(TYPES_FOLDER, schemaPath.replace('.json', '.d.ts')), compiled);
  });

  await Promise.all(buildTypes);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

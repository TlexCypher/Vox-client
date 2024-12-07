import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
    schemaFile: 'openapi/openapi.yaml',
    apiFile: './src/store/emptyApi.ts',
    apiImport: 'emptySplitApi',
    outputFile: './src/store/api.ts',
    exportName: 'api',
    hooks: true,
}

export default config

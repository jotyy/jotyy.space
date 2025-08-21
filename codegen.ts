import type { CodegenConfig } from '@graphql-codegen/cli';

const endpointOverride = process.env.CONTENTFUL_GRAPHQL_ENDPOINT;
const productionEndpoint = 'https://graphql.contentful.com/content/v1/spaces';
export const endpoint = `${endpointOverride || productionEndpoint}/${
  process.env.CONTENTFUL_SPACE_ID
}`;
export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint || '']: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    'lib/contentful/__generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'lib/contentful/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    'lib/contentful/__generated/sdk.ts': {
      documents: ['lib/contentful/graphql/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
  },
};

export default config;

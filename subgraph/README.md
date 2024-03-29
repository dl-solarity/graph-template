# Subgraph template

This is the template subgraph for developing your own subgraphs.

## How to use

You may need to clean up the repo first. Check out the `entities` directory together with the `schema.graphql` file and delete the unnecessary files.

### Codegen

To generate the entities from schema, run

```bash
npm run codegen
```

### Build

To build the mappings and compiled entities, execute

```bash
npm run build
```

### Codegen + build

Or you may do everything at once via

```bash
npm run compile
```

### Tests

To run the tests use

```bash
npm run test
```

### How to deploy

The deployment scripts and corresponding endpoints are specified in the `package.json` file. 

In order to deploy the subgraph you will need:

- Either The Graph node deployment endpoint + IPFS endpoint
- Or hosted service product name
- Or studio product name

Don't forget to update the `.env.example`.

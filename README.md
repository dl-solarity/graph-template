# The Graph template

Template The Graph repository for ad-hoc subgraphs development.

## How to use

The root of the repository is just a wrapper around the actual subgraphs. The wrapper is needed to lint (via prettier) and hook (via husky) the subgraphs code.

You will find the dummy template subgraph implementation in the `subgraph` directory. You may either modify the code there or create new directories for new subgraphs if the project requires more than one subgraph to be implemented.

> [!NOTE]
> Each subgraph has its own deployment configs, double check them before publishing

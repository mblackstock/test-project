## Test Monorepo Project

This project is a quick demo on how to set up a monorepository containing multiple nodes for publishing and development.

The root project depends on two sub modules located in `/packages` and also published in npm individually.  The sub module
in `/packages/test-sub1` also depends on `@mblackstock/test-sub2` code located at `/packages/test-sub2`.

When installing the root project normally, use the standard:

    npm install
    
This will pull its dependencies from npm.

When installing the root project for development, run a script afterward to set up the symlinks to the code locally.

    npm install
    npm run devInstall

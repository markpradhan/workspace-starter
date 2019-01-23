# workspace-starter

This is the mono repo for workspace-starter.

## Workspace

Most subfolders contain workspaces:

- app
- assets
- lib
- playground
- services

Other folders:

- node_modules (the root node modules folder holds most of the libraries)
- workspaces (holds configs for launching vscode workspaces without the clutter, add your own configs to your liking)

Import files in root:

- .babel.rc: holds configuration for transpiling es6+ to es5
- .env.js: this is where you would put your secrets
- .eslintrc: config for linting javascript (vscode plugin hooks into this)
- .gitignore: ignore files according to glob pattern
- jest.config.js: holds config for jest test runner
- nodemon.json: holds config for nodemon (restarts node servers based on config)
- package.json: information about workspace
- README.md: main doc file
- tsconfig.json: main typescript configuration
- tsconfig.test.json: main typescript configuration for tests
- tslint.json: linting config for typescript
- typings.d.ts: general types
- yarn.lock: yarn manages file

Files found in workspaces root:

- webpack.\*: tells webpack how to bundle your js
- dev.js: starts dev server (loads in dev webpack config)
- jsconfig.json: sets up vscode correctly
- tsconfig.json: sets up typescript
- tsconfig.test.json: sets up typescript test config
- jest.config.js: sets up jest config for testing
- package.json: primarily used for start scripts and dependency management
- nodemon.json: sets up nodemon for automated restarting of script file

#### App/\*

This is where the parts of the applications live that can be consider visual applications.
Eg:

- homepage
- react native mobile app
- desktop app
- web-app

#### Assets/\*

This is where your media files would be placed.
General stuff in main, other in relevant folder name. (eg assets/home for homepage images)

#### Constants/\*

Where everything considered constant strings should be placed.

#### Lib/\*

Where most of the functionality will live.
Place everything that is considered a library of handy and reusable here.

- api: api related code, for frontend
- atoms: Our base component. Must generally export one element with styling attached.
- bootstrap: Congiruation files for react, redux and webpack
- componoents: Place all ui components here
- domain: Place all domain related code here
- env: Place all environment related code here
- providers: Place all providers here (providers encapsulate functionality in components)
- theme: Place styling related code here (that dont fit the usual atom or are styling utility)
- tools: General tools for development
- utils: All utility modules (eg: nifty array functions)

#### Playground

Where we experiment, we will usually start development here and promote to relevant workspace

#### Services

Where our servers or serverless code lives.

## How to run a project

Usually we add an entry into the package.json script file.
This entry should hold all the the terminal commands needed to start whatever process you want.

Eg: to run the template:

- cd into the right workspace: `cd playground/template`
- start the npm script: `yarn dev` this will lookup package json and find the dev script and run the commands in it

## How to start on anything

If starting an visual app:

- copy over playground/template into playground/yourname
- change name of module in package.json
- start developing your code
- promote it to the correct workspace

For services:

- copy over playground/template-backend into playground/yourname
- change name of module in package.json
- start developing your code
- promote it to the correct workspace

> \*A note about packages: when adding packages, the standard `yarn add` command will not work!
> You specifically have to say for which workspace: `yarn add workspace-name package-name` and add a `-D` flag if its for develoment
> yarn will manage the package.json dependency entries and node_modules folders for us

## General flow of bundling:

- webpack config reads entry file and gathers all related files and modules
- typescript transpiles typescript files into js
- babel transpiles es6+ code into es5
- webpack spits out a bundle
- we consume the bundle

## Where to find basic examples

- comonent testing:
  - in lib/atoms/sample, check out the jest config, typescript config and package.json as well
- example react app (routing, redux):
  - in app/example
- example node.js server
  - in lib/tools/devServer

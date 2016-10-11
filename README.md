# vscode-boilerplate-es2015

A boilerplate project set up for writing and debugging ES2015 compliant code.

## Environment

Visual Studio Code v1.6.0, Node v6, NPM v3.

## Instructions

1. Clone or fork the repository
2. Navigate to project root
3. Run `npm install` to install dependencies
4. Run `npm run watch` to have Babel watch for changes and recompile
5. Set break points in `src` files
6. Run debugger

Source files are located in the `src` directory. Debug output (transpilation result) from Babel is in the `debug` directory. The launch configuration is set up with `src/index.js` as the application entry point, and it looks for sourcemaps in `debug`.

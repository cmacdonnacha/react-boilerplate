🚀 This is an opinionated ReactJS boilerplate. It's not perfect, but it's ideal 👌

<!-- prettier-ignore-start -->
![continuous-integration-badge]
![dependencies-badge]
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
<!-- prettier-ignore-end -->

🛠 Work In Progress 🛠

## TODO

- Dark mode theme
- When [this PR](https://github.com/facebook/create-react-app/pull/8362) is merged, change `"test": "react-scripts test --env=jest-environment-jsdom-sixteen"` back to `"test": "react-scripts test"`. This is a temp alternative, see [this](https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0). Change `test:no-watch` as well.

## Features

- [Redux Toolkit][redux-toolkit]
- [Typescript][typescript]
- [Jest][jest]
- [React Testing Library][react-testing-library]
- [ESLint][eslint]
- [Prettier][prettier]
- [Github Actions CI][github-actions]
- [Styled Icons Pack][styled-icons]
- [Source Map Explorer][source-map-explorer] to analyze code bloat
- Mobile friendly
- Unit & Integration Test examples

# Live Demo

[Check out the live demo](https://cmacdonnacha.github.io/react-boilerplate/)

## Set up

1. Click the `Use this Template` button or `git clone https://github.com/cmacdonnacha/react-boilerplate.git my-app`
2. `cd my-app`
3. `npm install`
4. That's it! See the **Available Commands** list below.

## Available Commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. Use `npm run test:no-watch` to run tests without a watcher.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:no-watch`

Runs tests without a watcher.

### `npm test:coverage`

Displays the code coverage within the console and also generates a coverage folder.

> To view the code coverage report in your browser open the `index.html` file within the `coverage/lcov-report` folder.

### `npm run lint`

Runs the ESLint typescript code lint checker. Running `npm run lint:fix` will automatically fix any lint errors where possible.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`

This will run a production build and then analyze the output using [source-map-explorer] which analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

## Testing

> [Write Tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)

The [react-testing-library][react-testing-library] is a great utility to work alongside Jest. It makes you focus more on writing tests the way an actual user would interact with your application.

Some useful links on [react-testing-library][react-testing-library]:

- [Kent C Dodds's blog][react-testing-library]
- When writing integration tests, think of [Arrange, Act, Assert](http://wiki.c2.com/?ArrangeActAssert)
- [React Testing Library Examples 1](https://react-testing-examples.com/)
- [React Testing Library Examples 2](https://github.com/kentcdodds/react-testing-library-course/tree/master/src/__tests__)
- [React Testing Library Cheatsheet](https://testing-library.com/docs/dom-testing-library/cheatsheet)
- [Jest DOM Custom Matchers - Use for Integration Tests](https://github.com/testing-library/jest-dom#custom-matchers)
- [Jest Matchers - Use for Unit Tests](https://jestjs.io/docs/en/expect)

## Recommended VS Code Extensions

- [Prettier][vscode-extension-prettier]
- [Spell Checker][vscode-extension-spell-checker]
- [ESLint][vscode-extension-eslint]
- [Git Lens][vscode-extension-git-lens]
- [Auto Rename HTML Tags][vscode-extension-auto-rename-tag]
- [Styled Components Syntax Highlighter][vscode-extension-styled-components]

## VS Code Snippets

- [My Typescript React snippets][vs-code-my-typescript-react-snippets]
- [Published Typescript React snippets][vs-code-typescript-react-snippets]

## Recommended VS Code Settings

- [My preferred VS Code settings][vs-code-my-settings]

## Recommended Chrome Extensions

- [Axe - Web Accessibility Testing][chrome-extension-axe]
- [Wave - Evaluation Accessibility Tool][chrome-extension-wave]
- [Redux DevTools][chrome-extension-redux-devtools]

## License

Licensed under the MIT license.

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[continuous-integration-badge]: https://github.com/cmacdonnacha/react-boilerplate/workflows/Continuous%20Integration/badge.svg
[dependencies-badge]: https://img.shields.io/david/cmacdonnacha/react-boilerplate.svg
[package]: https://www.npmjs.com/package/cra-template-ideal-starter
[typescript]: https://github.com/microsoft/TypeScript
[redux-toolkit]: https://github.com/reduxjs/redux-toolkit
[jest]: https://jestjs.io/
[react-testing-library]: https://testing-library.com/docs/react-testing-library/intro
[cra]: https://github.com/facebook/create-react-app
[source-map-explorer]: https://www.npmjs.com/package/source-map-explorer
[axios]: https://github.com/axios/axios
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/docs/en/index.html
[github-actions]: https://github.com/cmacdonnacha/react-boilerplate/actions
[styled-icons]: https://styled-icons.js.org/
[vs-code-my-typescript-react-snippets]: https://gist.github.com/cmacdonnacha/334ef14cb301c426ee6eb166eb500a5a
[vs-code-my-settings]: https://gist.github.com/cmacdonnacha/b6360f349c1a86aafda28f6d44c9d215
[vs-code-typescript-react-snippets]: https://github.com/infeng/vscode-react-typescript#readme
[vscode-extension-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-extension-auto-rename-tag]: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
[vscode-extension-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[vscode-extension-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode-extension-git-lens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[vscode-extension-styled-components]: https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
[chrome-extension-axe]: https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd
[chrome-extension-wave]: https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh
[chrome-extension-redux-devtools]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
<!-- prettier-ignore-end -->

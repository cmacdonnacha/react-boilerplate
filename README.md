<h1 align="center">🚀 React Boilerplate 🚀</h1>
<br>
<p align="center">This is an opinionated ReactJS boilerplate based off of <a href="https://create-react-app.dev/">create-react-app</a>. It's not perfect, but it's ideal 👌</p>

<p align="center">
  <a>
    <img src="https://github.com/cmacdonnacha/react-boilerplate/workflows/Continuous%20Integration/badge.svg" />
  </a>
  <a>
    <img src="https://img.shields.io/david/cmacdonnacha/react-boilerplate.svg" />
  </a>
  <a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="contributions" />
  </a>
</p>

## Features

- [React Query][react-query]
- [React Router][react-router]
- [Typescript][typescript]
- [Jest][jest]
- [React Testing Library][react-testing-library]
- [ESLint][eslint]
- [Prettier][prettier]
- [Github Actions CI/CD][github-actions]
- [Styled Icons Pack][styled-icons]
- [Source Map Explorer][source-map-explorer] to analyze code bloat
- Mobile friendly / Responsive design
- Unit & Integration test examples
- Accessability ready

&nbsp;

## Live Demo

[Check out the live demo](https://cmacdonnacha.github.io/react-boilerplate/)

&nbsp;

## Set up

1. Click the `Use this Template` button or `git clone https://github.com/cmacdonnacha/react-boilerplate.git my-app`
2. `cd my-app`
3. `npm install`
4. That's it! See the **Available Commands** list below.

&nbsp;

## Available Commands

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. Use `npm run test:no-watch` to run tests without a watcher.<br />

### `npm run test:no-watch`

Runs tests without a watcher.

### `npm run test:coverage`

Displays the code coverage within the console and also generates a coverage folder.

> To view the code coverage report in your browser open the `index.html` file within the `coverage/lcov-report` folder.

### `npm run lint`

Runs the ESLint typescript code lint checker. Running `npm run lint:fix` will automatically fix any lint errors where possible.

### `npm run build`

Builds a production version of the app inside the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run analyze`

This will run a production build and then analyze the output using [source-map-explorer] which analyzes JavaScript bundles using their source maps. This helps you understand where code bloat is coming from.

In the dropdown on top left, click on `[number].[hash].chunk.js` to see which **node_modules** packages are taking up the most space or `main.[hash].chunk.js` which is the actual source code.

&nbsp;

## CI/CD

This boilerplate uses [Github actions][github-actions] to continuously test, build and deploy. You can see the workflow file in the [workflows](.github/workflows/continuous-integration-workflow.yml) folder.

![https://i.imgur.com/Zzmgfl5.png](https://i.imgur.com/Zzmgfl5.png)

If you would like to deploy your app to github pages make sure to set your own `GITHUB_ACCESS_TOKEN` variable. See [creating a token.](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token). Otherwise you can remove the `deploy` job.

To enable github pages follow [these](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) instructions.

&nbsp;

## Host your production build locally

This can be useful when testing production builds vs dev builds or checking how well your build is minified.

1. `npm run build`
2. `npx serve -s build`

&nbsp;

## Updating dependencies

`npm-check-updates` makes it easy to update your dependencies. All you have to do is run the following:

1. `npm install -g npm-check-updates`
2. `ncu -u` which displays the outdated dependencies and updates your `package.json` file.
3. `npm install` which will then install the new versions for you.

&nbsp;

## Clean git history

When cloning this repository you will get all of it's git history. If you would like to start fresh please do the following:

1. Delete the `.git` folder
2. `git init`

This will also clear the husky config (tool that checks passing tests before git commit) so to re-enable this you will need to `npm install --save-dev husky` again.

&nbsp;

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

&nbsp;

## Recommended VS Code Extensions

- [Prettier][vscode-extension-prettier]
- [Spell Checker][vscode-extension-spell-checker]
- [ESLint][vscode-extension-eslint]
- [Git Lens][vscode-extension-git-lens]
- [Auto Rename HTML Tags][vscode-extension-auto-rename-tag]
- [Styled Components Syntax Highlighter][vscode-extension-styled-components]

&nbsp;

## VS Code Snippets

- [My Typescript React snippets][vs-code-my-typescript-react-snippets]
- [Published Typescript React snippets][vs-code-typescript-react-snippets]

&nbsp;

## Recommended VS Code Settings

- [My preferred VS Code settings][vs-code-my-settings]

&nbsp;

## Recommended Chrome Extensions

- [Axe - Web Accessibility Testing][chrome-extension-axe]
- [Wave - Evaluation Accessibility Tool][chrome-extension-wave]

&nbsp;

## License

Licensed under the MIT license.

&nbsp;

## TODO

- Bug: Investigate issue with gh pages not working with very first workflow run after new clone. Currently I have to use global gh-pages package for first time `gh-pages -d build`.

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[continuous-integration-badge]: https://github.com/cmacdonnacha/react-boilerplate/workflows/Continuous%20Integration/badge.svg
[dependencies-badge]: https://img.shields.io/david/cmacdonnacha/react-boilerplate.svg
[package]: https://www.npmjs.com/package/cra-template-ideal-starter
[typescript]: https://github.com/microsoft/TypeScript
[react-query]: https://github.com/tannerlinsley/react-query
[jest]: https://jestjs.io/
[react-testing-library]: https://testing-library.com/docs/react-testing-library/intro
[cra]: https://github.com/facebook/create-react-app
[source-map-explorer]: https://www.npmjs.com/package/source-map-explorer
[axios]: https://github.com/axios/axios
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/docs/en/index.html
[github-actions]: https://github.com/cmacdonnacha/react-boilerplate/actions
[styled-icons]: https://styled-icons.js.org/
[react-router]: https://reacttraining.com/react-router/web/guides/quick-start
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
<!-- prettier-ignore-end -->

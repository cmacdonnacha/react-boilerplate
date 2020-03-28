This is a [Create React App](https://github.com/facebook/create-react-app) template. It's not perfect, but it's ideal 👌

<!-- prettier-ignore-start -->
[![version][version-badge]][package]
[![License](https://img.shields.io/npm/l/cra-template-ideal-starter.svg)](https://github.com/cmacdonnacha/cra-template-ideal-starter/blob/master/LICENSE)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
<!-- prettier-ignore-end -->

## Usage

### npx

```sh
npx create-react-app my-app --template cra-template-ideal-starter
```

## Includes

- [typescript][typescript]
- [redux][redux]
- [react-testing-library][react-testing-library]
- [eslint][eslint]
- [prettier][prettier]

## Additional set up

The following is not yet supported by [Create React App](https://github.com/facebook/create-react-app) so must be added manually:

1. Add the following to your `package.json` file to run prettier formatting and eslint checks after a git commit:

```
    "husky": {
      "hooks": {
        "pre-commit": "pretty-quick --staged"
      }
    }
```

## TODO

- View reports: If you open the index.html file in browser located at coverage/lcov-report folder you will be able to view the report
- Recommended VS code extensions
- Have separe section on testing
  - https://react-testing-examples.com/
  - When writing tests, think of http://wiki.c2.com/?ArrangeActAssert
  - React Testing lib cheat sheet https://testing-library.com/docs/react-testing-library/cheatsheet
  - Dark mode theme
- My VS code snippets: https://gist.github.com/cmacdonnacha/334ef14cb301c426ee6eb166eb500a5a
- Link to others as well as I don't have many
- in VS code, enable editor on save. Perhaps store my settings as gist as well?

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs the ESLint typescript code lint checker. Running `npm run lint:fix` will automatically fix any lint errors where possible.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

Licensed under the MIT license.

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[version-badge]: https://img.shields.io/npm/v/cra-template-ideal-starter.svg?style=flat-square
[package]: https://www.npmjs.com/package/cra-template-ideal-starter
[license-badge]: https://img.shields.io/npm/l/cmacdonnacha/cra-template-ideal-starter.svg?style=flat-square
[license]: https://github.com/cmacdonnacha/cra-template-ideal-starter/blob/master/LICENSE
[typescript]: https://github.com/microsoft/TypeScript
[redux]: https://github.com/reduxjs
[react-testing-library]: https://testing-library.com/docs/react-testing-library/intro
[github-watch-badge]: https://img.shields.io/github/watchers/cmacdonnacha/cra-template-ideal-starter.svg?style=social
[github-watch]: https://github.com/cmacdonnacha/cra-template-ideal-starter/watchers
[github-star-badge]: https://img.shields.io/github/stars/cmacdonnacha/cra-template-ideal-starter.svg?style=social
[github-star]: https://github.com/cmacdonnacha/cra-template-ideal-starter/stargazers
[cra]: https://github.com/facebook/create-react-app
[axios]: https://github.com/axios/axios
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/docs/en/index.html
<!-- prettier-ignore-end -->

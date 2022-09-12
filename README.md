# Base Typscript - Create React App

## Required Tools

- [NodeJS](https://nodejs.org/en/download/)
- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)

## Build Run Local

### Set Auth0 Environement Variables

- export REACT_APP_AUTH0DOMAIN
- export REACT_APP_AUTH0CLIENTID

### Install Modules and Run

- yarn
- yarn start

### Cypress Testing

NOTE: Start the server in one terminal window first

- yarn cypress run --headless

## Docker run

<pre>. ./buildAndRun.sh "dev-sfpt-yw1.us.auth0.com" "14w1mnx35YfyJVCFA7HnTn32La2E0gbS"</pre>

## Common Issues

- Node Current Updated Version

### NOTE: Remember to use nvm use <node version>

<pre>
Common Errors Messages:
error eslint@8.23.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "14.15.0"
error Found incompatible module.
--- OR --
Error: Failed to initialize watch plugin "node_modules/jest-watch-typeahead/filename.js":

  ● Test suite failed to run


</pre>

## Key References

- [manifest files](https://web.dev/add-manifest/)
- [ReactJS](https://reactjs.org/)
- [React Prettier](https://prettier.io/docs/en/install.html)
- [Husky Git Hook](https://typicode.github.io/husky/#/)
- [USWDS Design System](https://designsystem.digital.gov/documentation/getting-started/developers/phase-one-install/)=
- [React Hook Form](https://react-hook-form.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Cypress E2E Testing](https://www.cypress.io/)
- [Create App Typescript](https://create-react-app.dev/docs/adding-typescript/)
- [Atomic Design](https://atomicdesign.bradfrost.com/)

### --- FUTURE ---

- [React Location](https://react-location.tanstack.com/)
- [React Grid](https://reactgrid.com/)
- [React Spreadsheet](https://github.com/iddan/react-spreadsheet)

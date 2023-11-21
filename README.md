# playwright-demo

## Introduction
This is a Playwright demonstration using Node. It tests [Direct's staging platform](https://staging.getdirect.io/sign-in) by running a few critical path validations.

## Dependencies
* Node
* Playwright
* Playwright/test
* Dotenv

## Instructions
#### In your project root directory:
  
* Install Playwright
* install Playwright test
* install Dotenv

#### Run Playwright:
  for headless tests:  `~/playwright-demo $ npx playwright test`

  for headed, interactive tests:  `~/playwright-demo $ npx playwright --ui`
  
  To authenticate once and use the token in subsequent tests, ensure that global.setup.ts is ran first.

## Notes
This project has no intrinsic app code and therefore needs no entry point. `"main": "index.js",` has been removed from package.json.
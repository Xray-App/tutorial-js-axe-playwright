# tutorial-js-axe-playwright
[![build workflow](https://github.com/Xray-App/tutorial-js-axe-playwright/actions/workflows/main-cloud.yml/badge.svg)](https://github.com/Xray-App/tutorial-js-axe-playwright/actions/workflows/main-cloud.yml)
[![license](https://img.shields.io/badge/License-BSD%203--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/Xray-App/community)

## Overview
Code that supports the tutorial [Accessibility testing using Axe-Playwright](https://docs.getxray.app/display/XRAYCLOUD/Accessibility+testing+using+Axe-Playwright) showcasing how to perform accessibility validations using [Axe-Playwright](https://github.com/abhinaba-ghosh/axe-playwright) and how to integrate with [Xray Test Management](https://www.getxray.app/) on Jira using JUnit XML reports.

The test automation code implements validations using [Axe-Playwright](https://github.com/abhinaba-ghosh/axe-playwright).

## Prerequisites
In order to run this tutorial you need to have Nodejs, install the playwright-test runner and Axe-Playwright.
```
npm i -D axe-playwright
npx playwright install
npm i -D @playwright/test
```

## Running
Tests can be executed locally with the following command
```
npx playwright test
```

## Submitting results to Jira

Results can be submitted to Jira so that they can be shared with the team and their impacts be easily analysed.
This can be achieved using [Xray Test Management](https://www.getxray.app/) as shown in further detail in this [tutorial](https://docs.getxray.app/display/XRAYCLOUD/Accessibility+testing+using+Axe-Playwright).

## Contact

Any questions related with this code, please raise issues in this GitHub project. Feel free to contribute and submit PR's.
For Xray specific questions, please contact [Xray's support team](https://jira.getxray.app/servicedesk/customer/portal/2).

## References

- [Playwright test](https://playwright.dev/docs/test-intro/)
- [Playwright](https://playwright.dev/)
- [How Xray processes JUnit XML reports](https://docs.getxray.app/display/XRAYCLOUD/Taking+advantage+of+JUnit+XML+reports)
- [Using playwright-test junit reporter](https://playwright.dev/docs/test-reporters#junit-reporter)
- [Axe-Playwright](https://github.com/abhinaba-ghosh/axe-playwright)


## LICENSE

[BSD 3-Clause](LICENSE)
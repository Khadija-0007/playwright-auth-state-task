# Playwright Auth State Task

Barakah TechLabs internship, Task 4: Saving Authentication State.

## What this project does
- Logs in once on https://www.saucedemo.com using a setup test (`auth.setup.ts`).
- Saves the session (cookies and local storage) to `playwright/.auth/user.json` with `storageState`.
- All other tests load that saved file, so they skip the login screen.

## Tech stack
Playwright, TypeScript, Trace Viewer, Browser Contexts

## Project structure
- `tests/auth.setup.ts`: logs in and saves the session
- `tests/inventory.spec.ts`: tests that start already logged in
- `playwright.config.ts`: a `setup` project, and a `chromium` project that depends on it

## How to run
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Results
4 tests passed: 1 setup test and 3 tests that skip the login screen.

## Why reuse auth state?
It saves time, because the login runs once instead of in every test. Playwright's BrowserContext isolation also keeps each test's browser session separate, so parallel tests do not share cookies by mistake.

## Note
The saved session file is listed in `.gitignore`, because it contains session data.
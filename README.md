# Playwright E-Commerce UI Automation Framework

A scalable UI automation framework built using **Playwright with TypeScript** for automating end-to-end e-commerce workflows.

The framework follows the **Page Object Model (POM)** design pattern and uses Playwright fixtures, environment-based configuration, data-driven testing, Faker for dynamic test data, cross-browser execution, parallel execution, failure diagnostics, and GitHub Actions for CI/CD.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test
- Page Object Model (POM)
- Git & GitHub
- GitHub Actions
- Faker
- JSON
- dotenv

---

## Framework Features

- Page Object Model (POM)
- Reusable BasePage
- Custom Playwright fixtures
- Environment-based configuration
- Environment-specific credentials
- JSON-based data-driven testing
- Dynamic test data generation using Faker
- Dynamic locators
- Cross-browser testing
- Parallel test execution
- Configurable retries
- Screenshot capture on failure
- Video recording on failure
- Playwright trace on retry
- HTML test reporting
- GitHub Actions CI/CD
- CI test artifacts

---

## Project Structure

```text
playwright-ecommerce-automation/
│
├── Data/
│   ├── user.data.ts
│   └── user.type.ts
│
├── fixtures/
│   └── pages.fixture.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── OrderPage.ts
│   ├── AddressPage.ts
│   ├── ShippingPage.ts
│   └── PaymentPage.ts
│
├── test-data/
│   └── product.json
│
├── tests/
│   └── *.spec.ts
│
├── playwright/
│   └── .auth/
│
├── .env
├── .env.qa
├── .env.uat
├── .gitignore
├── playwright.config.ts
├── package.json
└── README.md

# 🚀 Playwright Automation Framework with TypeScript

A scalable End-to-End Test Automation Framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.

This project demonstrates industry-standard automation practices, including UI testing, API testing, reusable framework components, JSON-based test data management, and CI/CD integration with GitHub Actions.

# 🚀 Playwright Automation Framework with TypeScript

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-success)
![Jenkins](https://img.shields.io/badge/CI-Jenkins-red)
![API Testing](https://img.shields.io/badge/API-Testing-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📖 Overview

This project is an end-to-end automation testing framework built using **Playwright** and **TypeScript** following the **Page Object Model (POM)** design pattern.

The framework automates an E-commerce web application and demonstrates UI automation, API testing, reusable utilities, GitHub Actions, Jenkins CI/CD integration, reporting, and scalable enterprise-level test architecture.
---

# 📋 Table of Contents

- Overview
- Key Features
- Technology Stack
- Project Architecture
- Test Scenarios
- Folder Structure
- Installation
- Running Tests
- Test Reports
- CI/CD Integration
- Design Patterns
- Utilities
- Future Enhancements
- Author

---

# 📖 Overview

This automation framework is designed to validate the functionality of an E-Commerce application using modern automation best practices.

The framework is:

- Scalable
- Easy to maintain
- Reusable
- Data-driven
- Cross-browser compatible
- CI/CD ready

It follows the **Page Object Model (POM)** to keep locators, actions, and test cases clean and maintainable.

---

# ✨ Key Features

✔ Page Object Model (POM)

✔ End-to-End UI Automation

✔ API Automation Testing

✔ JSON Test Data Management

✔ Reusable Base Page

✔ Environment Configuration

✔ Utility Classes

✔ Cross Browser Testing

✔ GitHub Actions CI/CD

✔ HTML Reports

✔ Screenshot Support

✔ Clean Project Structure

---

# 🛠 Technology Stack

| Technology | Purpose |
|------------|----------|
| Playwright | UI Automation |
| TypeScript | Programming Language |
| Node.js | Runtime Environment |
| REST API | API Testing |
| JSON | Test Data |
| Git | Version Control |
| GitHub | Repository Management |
| GitHub Actions | CI/CD Pipeline |

---

# 🏗 Project Architecture

```
Playwright_with_Typescript_Project
│
├── Pages
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── PaymentPage.ts
│
├── tests
│   ├── api
│   ├── login.spec.ts
│   ├── registration.spec.ts
│   ├── searchProduct.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── payment.spec.ts
│
├── fixtures
├── utils
├── test-data
├── .github/workflows
├── playwright.config.ts
├── package.json
└── README.md
```

---

# ✅ Automated Test Scenarios

## UI Automation

- User Registration
- User Login
- Product Search
- Add Product to Cart
- Cart Validation
- Checkout Process
- Payment Flow

---

## API Automation

- Get Products API
- Create User API
- Delete User API

---

# 📂 Folder Description

| Folder | Description |
|---------|-------------|
| Pages | Page Object classes |
| tests | UI & API test cases |
| fixtures | Shared test fixtures |
| utils | Utility/helper classes |
| test-data | JSON test data |
| .github | GitHub Actions workflow |

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/your-username/Playwright_with_Typescript_Project.git
```

Move to project directory

```bash
cd Playwright_with_Typescript_Project
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Run Chromium

```bash
npx playwright test --project=chromium
```

### Run Firefox

```bash
npx playwright test --project=firefox
```

### Run WebKit

```bash
npx playwright test --project=webkit
```

---

# 📊 HTML Report

Generate the Playwright HTML report

```bash
npx playwright show-report
```

The report includes:

- Test Summary
- Pass/Fail Status
- Execution Time
- Screenshots
- Error Details
- Trace Information

---

# 🔄 CI/CD Integration

GitHub Actions automatically executes the test suite on every push and pull request.

Workflow location:

```
.github/workflows/playwright.yml
```

---

# 🏛 Design Pattern

This framework follows the **Page Object Model (POM)** architecture.

Framework Components:

- Base Page
- Page Classes
- Utility Classes
- API Helpers
- JSON Test Data
- Fixtures
- Environment Configuration

---

# 📦 Utilities Included

- Environment Management
- Random Test Data Generator
- API Helper
- Logger
- Screenshot Utility

---

# 🌐 Cross Browser Support

- Chromium
- Firefox
- WebKit

---

# 📈 Future Enhancements

- Jenkins Integration
- Allure Reports
- Docker Execution
- Azure DevOps Pipeline
- Parallel Execution
- Playwright Trace Viewer
- AI-assisted Test Generation

---

# 👩‍💻 Author

## Aishwarya Patil

**QA Automation Engineer**

### Skills

- Playwright
- TypeScript
- Automation Testing
- API Testing
- Manual Testing
- SQL
- Git
- GitHub
- GitHub Actions
- CI/CD

---

# 📄 License

This project is created for learning, portfolio, and interview demonstration purposes.

---

# ⭐ If you found this project useful

Please consider giving it a ⭐ on GitHub.

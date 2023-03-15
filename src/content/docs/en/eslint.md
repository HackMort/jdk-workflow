---
title: "ESLint"
description: "ESLint and StandardJS"
---

## What is it?
ESLint is an open-source JavaScript linting tool that is used to identify and report on patterns found in JavaScript code. It is designed to help developers identify and fix code that doesn't adhere to best practices, coding conventions, and other standards.

ESLint works by analyzing the syntax of a JavaScript file and comparing it against a set of predefined rules. These rules are defined by the community or by the developer, and they can be customized based on specific project requirements. ESLint can be integrated with various text editors, build systems, and continuous integration tools.

## Benefits of ESLint

#### Code Quality
ESLint can help you identify and fix common code quality issues, such as unused variables, missing semicolons, and inconsistent spacing.

#### Code Consistency
ESLint can help you enforce a consistent coding style across your project, which can make it easier for other developers to understand and contribute to your codebase.

#### Code Maintainability
ESLint can help you identify and fix code that doesn't adhere to best practices, coding conventions, and other standards, which can make it easier to maintain and improve your codebase over time.

#### Code Performance
ESLint can help you identify and fix code that is inefficient or slow, which can improve the performance of your application.

#### Catch Bugs
ESLint can help you identify and fix bugs that may be present in your code, which can help prevent bugs from being introduced into your codebase.

#### Support Code Refactoring
ESLint can help with refactoring efforts by identifying areas of the codebase that could benefit from refactoring, such as code that violates DRY (Don't Repeat Yourself) or SOLID principles.

## StandardJS
StandardJS is a JavaScript style guide, linter, and formatter. It is designed to help developers write consistent and readable JavaScript code that adheres to best practices and coding conventions.

StandardJS is built on top of ESLint and uses ESLint rules to enforce coding conventions. It also includes a set of rules that are specific to StandardJS, such as the use of semicolons and the maximum line length.

StandardJS is designed to be used with a text editor or IDE that supports ESLint. It can also be used with build systems and continuous integration tools.

### Install StandardJS
Next, you must install StandardJS. You can do this by running the following command in your terminal:

```bash
npm install standard --save-dev
```

Modify your `package.json` file and edit eslintConfig to use StandardJS:

```json
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
}
```

## Error Lens
Error Lens is a Visual Studio Code extension that helps you identify and fix errors in your code. It can be used with ESLint to help you identify and fix errors in your JavaScript code.

### Install Error Lens
To install Error Lens, open the Extensions tab in Visual Studio Code and search for Error Lens. Click the Install button to install the extension. Or you can install it directly from the Visual Studio Code Marketplace:
<a href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens" target="_blank">Error Lens</a>


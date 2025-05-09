![Tests Passing](https://github.com/NicolaWealth/defer_until/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fdefer_until%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction 
The `defer_until` package enables many functions to be added to a deferred stack, which can then be executed at any time.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `defer_until` package with npm:

`npm install @nicolawealth/defer_until`

# Usage
This package provides functionality to continuously add void functions with no arguments to a stack and then call the entire stack of functions at a later point.

In a simple use-case, a single function can be deferred to be called at a later point. In more complex cases, any number of functions can be added at a variety of points in the code to all be called at a later point simultaneously in last-in-first-out (LIFO) order.

After the stack is used to call all stored functions, the stack is emptied.

# Interface
The `defer_until` package provides the function `deferUntilFactory` which returns an instance of the object `deferUntilType` with the following properties:
- `defer(handler: () => void);` is used to pass handler functions which will be added to a stack of existing handler functions to all be called upon at a later time
- `later();` is used to call all the handler functions currently in the stack, following a LIFO convention, leaving the stack empty

# Testing
Tests can be found in `defer_until.test.ts` located in `defer_until/src` and should be run with sinon, mocha and nyc.





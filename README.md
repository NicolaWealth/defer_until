# Introduction 
The ```defer_until``` package offers an implementation of a stack of void functions. The stack accepts any number of functions added while deferring the actual calling of the functions until a desired later point.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the ```defer_until``` package with npm:

```npm install @nicola_wealth/defer_until```

# Usage
This package provides functionality to continuously add void functions with no arguments to a stack and then call the entire stack of functions at a later point.

In a simple use-case, a single function can be deferred to be called at a later point. In more complex cases, any number of functions can be added at a variety of points in the code to all be called at a later point simultaneously in last-in-first-out (LIFO) order.

After the stack is used to call all stored functions, the stack is cleared and is reset to empty.

# Interface
- The ```defer_until``` package provides the function ```deferUntilFactory``` which returns an instance of the object ```deferUntilType``` with properties ```later()``` and ```defer(handler: () => void)```
- ```defer(handler: () => void);``` is used to pass handler functions which will be added to a stack of existing handler functions to all be called upon at a later time
- ```later();``` is used to call all the handler functions currently in the stack, following a LIFO convention, leaving the stack empty

# Testing
Tests can be found in ```defer_until.test.ts``` located in ```defer_until/src``` and should be run with sinon, mocha and nyc.





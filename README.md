# Stack

Stack is a library to help developers build applications using functional development.

## Installations

```node
npm install
```
## Development

```node
gulp watch
```
## Building Library

```node
gulp build
```

## Testing Library

```node
gulp test
```

## Create Documentation for Library

```node
gulp test
```

## Modules

Stack is currently broken down into 4 modules.

### fn

This module contains all functions that can be utilized for functional development such as compose, pipe, curry etc.

### monad

This module consist or 3 monads

- Maybe: used to handle nullable data
- IO: used to handle the effects of DOM manipulations, but also used as a description of effects that are evaluated at a later time
- Either: Used for handling 2 sides, where there is a success or a failure. Right side indicates success and is leaned on, where as left is the other state used to errors.

### pattern

This modules is useful if you need a (or combination of) design pattern(s) for you application. Example would be to create middleware, add decorators to existing classes to enhance functionality or simply use classes to create factories.

### reactive

This is a module one could use to add an observerable pattern to their application and forgo the use of promises and call backs. Similar to RxJS, just smaller and with the ability to create ones own operators.

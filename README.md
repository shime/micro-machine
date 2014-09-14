## Micro Machine

[![Build Status](https://travis-ci.org/shime/micro-machine.svg?branch=master)](https://travis-ci.org/shime/micro-machine)

Minimal state machine implementation.

Heavily inspired by [soveran/micromachine](https://github.com/soveran/micromachine).

### Installation

```shell
npm install micro-machine
```

### Usage

```javascript
var Machine = require('micro-machine')
  , machine = new Machine('pending')

machine.transitionsFor.confirm = { pending: 'confirmed' }
machine.transitionsFor.reset = { confirmed: 'pending' }

machine.trigger('confirm')
console.log(machine.state) // 'confirmed'
machine.trigger('reset')
console.log(machine.state) // 'pending'
```

### Callbacks

You can also define callbacks that will be invoked after the specified transition.

```javascript
var Machine = require('micro-machine')
  , machine = new Machine('pending')
  
machine.transitionsFor.confirm = { pending: 'confirmed' }
machine.transitionsFor.reset = { confirmed: 'pending' }

var state

/* Use 'any' to define callback for any transition. */
machine.on('any',  function(machine){
  state = machine.state
})

machine.on('reset', function() { console.log('resetting...') })

machine.trigger('confirm')
console.log(state)  // 'confirmed'

machine.trigger('reset') // 'resetting...'
```

### Development

Run tests with

    npm test

or build it with

    npm run build

### Unlicense

This repository and its contents belong to the public domain.

It has been released under the [UNLICENSE](https://github.com/shime/micro-machine/blob/master/UNLICENSE).

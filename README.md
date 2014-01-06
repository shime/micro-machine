## MicroMachineJS

Minimal state machine implementation in JS.

Heavily inspired by [soveran/micromachine](https://github.com/soveran/micromachine).


### Installation

* Node

```shell
npm install micro-machine
```

* Browser

```html
<script src="//rawgithub.com/shime/micro-machine-js/master/dist/micro-machine.min.js"></script>
```

Download the build from `dist` folder for usage in production. Otherwise, you'll get bitten by Rawgithub!

### Usage

```javascript
machine = new MicroMachine('pending');
machine.transitionsFor.confirm = { pending: 'confirmed' };
machine.transitionsFor.reset = { confirmed: 'pending' };

machine.trigger('confirm');
console.log(machine.state); // 'confirmed'
machine.trigger('reset');
console.log(machine.state); // 'pending'
```

### Callbacks

You can also define callbacks that will be invoked after the specified transition.

```javascript
machine = new MicroMachine('pending');
machine.transitionsFor.confirm = { pending: 'confirmed' };
machine.transitionsFor.reset = { confirmed: 'pending' };

var state;

/* Use 'any' to define callback for any transition. */
machine.on('any',  function(machine){
  state = machine.state;
});

machine.on('reset', function() { console.log('resetting...') });

machine.trigger('confirm');
console.log(state);  // 'confirmed'

machine.trigger('reset'); // 'resetting...'
```

### Development

Run tests with

    grunt test

or build it with

    grunt

### License

MIT

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
<script src="//raw.github.com/shime/micro-machine-js/master/dist/micro-machine.min.js"></script>
```

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

### Development

Run tests with

    grunt test

or build it with

    grunt

### License

MIT

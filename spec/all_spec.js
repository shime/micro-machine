var MicroMachine = require('../lib/micro-state-machine');

var machine;

function prepareMachine(){
  beforeEach(function(){
    machine = new MicroMachine('pending');
    machine.transitionsFor.confirm = {pending: 'confirmed'};
    machine.transitionsFor.ignore = {pending: 'ignored'};
    machine.transitionsFor.reset = {confirmed: 'pending', ignored: 'pending'};
  });
}

describe("initial state", function(){
  prepareMachine();

  it("has an initial state", function(){
    expect(machine.state).toBe('pending');
  });
});

describe("#canTrigger", function(){
  prepareMachine();

  it("returns true when the event is available", function(){
     expect(machine.canTrigger('confirm')).toBe(true);
  });

  it("returns false when the event is unavailable", function(){
     expect(machine.canTrigger('reset')).toBe(false);
  });
});

describe("#trigger", function(){
  prepareMachine();

  it("returns true when the event is available", function(){
     expect(machine.trigger('confirm')).toBe(true);
  });

  it("switches state to the new one when the transition was successful", function(){
     machine.trigger('confirm');
     expect(machine.state).toBe('confirmed');
  });

  it("returns false when the event is unavailable", function(){
     expect(machine.trigger('reset')).toBe(false);
  });

  it("preserves state when the transition was unsucessful", function(){
     machine.trigger('reset');
     expect(machine.state).toBe('pending');
  });
});

(function() {
  var MicroMachine = (function(initialState){
    var publicMethods = {};

    publicMethods.state = initialState;
    publicMethods.transitionsFor = {};

    var endingState = function(event){
      return publicMethods.transitionsFor[event][publicMethods.state];
    };

    var callbacks = {};

    var changeState = function(state){
      publicMethods.state = state;

      if (callbacks[state]){
        callbacks[state](publicMethods);
      }

      if (callbacks.any){
        callbacks.any(publicMethods);
      }
    };

    publicMethods.canTrigger = function(event){
      return !!endingState(event);
    };

    publicMethods.trigger = function(event){
      if (this.canTrigger(event)){
        changeState(endingState(event));
        return true;
      } else 
        return false;
    };

    publicMethods.on = function(event, callback) {
      callbacks[event] = callback;
    };

    return publicMethods;
  });

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = MicroMachine;
  else
    window.MicroMachine = MicroMachine;
})();

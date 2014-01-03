(function() {
  var MicroMachine = (function(initialState){
    var publicMethods = {};

    publicMethods.state = initialState;
    publicMethods.transitionsFor = {};

    var endingState = function(event){
      return publicMethods.transitionsFor[event][publicMethods.state];
    };

    publicMethods.canTrigger = function(event){
      return !!endingState(event);
    };

    publicMethods.trigger = function(event){
      if (this.canTrigger(event)){
        this.state = endingState(event);
        return true;
      } else 
        return false;
    };

    return publicMethods;
  });

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = MicroMachine;
  else
    window.MicroMachine = MicroMachine;
})();

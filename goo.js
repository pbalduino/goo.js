module.exports = (function() {
  var _Node = function(value, next) {
    var _value = value;
    var _next = next;

    this.getValue = function() {
      return _value;
    };

    this.getNext = function() {
      if(typeof(_next) === "function") {
        _next = new _Node(_next(_value), _next);
      } 
      return _next;
    };
  };

  var _inc = function(num) {
    return num + 1;
  }

  var _dec = function(num) {
    return num - 1;
  }

  return {
    Node: _Node,

    LazySeq: function(init, thunk) {
      var _head = new Node(init, thunk);
      var _size = 1;

      this.size = function() {
        return _size;
      };
    },
    inc: _inc,
    dec: _dec,
    map: function(fun, seq) {

    },

    range: function() {
      var ret;

      switch(arguments.length) {
        case 0:
          ret = this.LazySeq(0, function(c) {return c + 1;});
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          throw "Unexpected arity: " + arguments.length + " arguments";
      }

      return ret;
    }
  }
})();
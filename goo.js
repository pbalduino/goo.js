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

  var _LazySeq = function(init, thunk) {
    var _head = new _Node(init, thunk);
    var _size = 1;
    var _thunk = thunk;

    this.size = function() {
      return _size;
    };

    this.first = function() {
      return this.get(0);
    }

    this.rest = function() {
      return new _LazySeq(this.first(), thunk);
    };

    this.get = function(pos) {
      var current = _head;
      for(var p = 0; p < pos; p++) {
        current = current === null ? null : current.getNext();
      }
      return current === null ? null : current.getValue();
    }
  };

  var _rest = function(seq) {
    return seq.rest();
  }

  var _inc = function(num) {
    return num + 1;
  };

  var _dec = function(num) {
    return num - 1;
  };

  var _first = function(seq) {
    return seq.first();
  };

  var _get = function(seq, pos) {
    return seq.get(pos);
  }

  return {
    Node: _Node,

    LazySeq: _LazySeq,
    rest: _rest,
    inc: _inc,
    dec: _dec,
    first: _first,
    get: _get,
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
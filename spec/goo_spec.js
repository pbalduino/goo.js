describe("Using goo module", function() {

  var goo = require("../goo");

  it("goo is not undefined", function() {
    expect(goo).not.toBe(undefined);
  });

  it("Traversing Node with inc", function() {
    var node = new goo.Node(0, goo.inc);

    for(var p = 0; p < 10; p++) {
      console.log(node.getValue());
      node = node.getNext();
    };
  });

  it("Create a LazySeq with inc", function() {
    var ls = new goo.LazySeq(0, goo.inc);

    for(var p = 0; p < 10; p++) {
      console.log(ls.get(p));
    }
  });

  it("Create a LazySeq with inc - functional", function() {
    var ls = new goo.LazySeq(0, goo.inc);

    while(goo.first(ls) < 10) {
      console.log(goo.first(ls));
      ls = goo.rest(ls);
    }
  });
});
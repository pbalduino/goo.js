describe("Using goo module", function() {

  var goo = require("../goo");

  it("goo is not undefined", function() {
    expect(goo).not.toBe(undefined);
  });

  it("Creating LazySeq with inc", function() {
    var node = new goo.Node(0, goo.inc);

    for(var p = 0; p < 10; p++) {
      console.log(node.getValue());
      node = node.getNext();
    };
  });
});
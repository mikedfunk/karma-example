(function () {
  'use strict';
  describe("add function spec", function () {
    var add = require('add');
    it("should add two numbers", function () {
      expect(add(1, 1)).toEqual(2);
    });
  });
}());

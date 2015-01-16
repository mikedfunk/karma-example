(function () {
  'use strict';

  // test suite
  describe("add function spec", function () {

    // bring this in with browserify-shim
    var add = require('add');

    // individual test
    it("should add two numbers", function () {

      // add two numbers
      expect(add(1, 1)).toEqual(2);
      expect(add(1, 2)).toEqual(3);
    });

    it("should fail when only one number is passed", function () {

      // needs two params
      // for some reason this only works if you call add in a closure
      expect(
        function () {
          add(1);
        }
      ).toThrowError('first and second parameters are required');
    });
  });
}());

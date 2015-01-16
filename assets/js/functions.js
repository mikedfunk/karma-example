(function () {
  'use strict';

  /**
   * add numbers
   * @param {int} number1
   * @param {int} number2
   * @return {int}
   */
  var Add = function(number1, number2) {
    if (number1 === undefined || number2 === undefined) {
      throw new Error('first and second parameters are required');
    }
    return number1 + number2;
  };

  // this is important for browserify-shim to browserify this file
  window.add = Add;
}());

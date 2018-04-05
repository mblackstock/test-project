const sub2 = require('@mblackstock/test-sub2');

module.exports = {
  foo: function() {
    console.log('sub1 called');
    sub2();
  }
} 
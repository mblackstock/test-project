
const sub2 = require('sub2');

module.exports = {
  foo: function() {
    console.log('sub1 called');
    sub2();
  }
}
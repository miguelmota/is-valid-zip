var test = require('tape');
var isValidZip = require('../is-valid-zip');

test('is valid zip', function (t) {
  t.plan(7);

  t.equal(isValidZip(11743), true);
  t.equal(isValidZip('11743-6961'), true);
  t.equal(isValidZip('11743-6'), false);
  t.equal(isValidZip(11743344), false);
  t.equal(isValidZip(144), false);
  t.equal(isValidZip({}), false);
  t.equal(isValidZip(), false);
});

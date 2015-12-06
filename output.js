'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var foo = (function () {
  var _this = this;

  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(bar) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bar;

          case 2:
            _context.t0 = _context.sent;
            return _context.abrupt('return', _context.t0 + 'baz');

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));
  return function foo(_x) {
    return ref.apply(this, arguments);
  };
})();

foo('bar').then(function (result) {
  return console.log(result);
});
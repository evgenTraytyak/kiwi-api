'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _unirest = require('unirest');

var _unirest2 = _interopRequireDefault(_unirest);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = 'https://api.skypicker.com/';

var KiwiAPI = function () {
  function KiwiAPI(options) {
    _classCallCheck(this, KiwiAPI);

    Object.assign(this, options);
  }

  _createClass(KiwiAPI, [{
    key: 'places',
    value: function places() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.call('places', params).then(function (response) {
        return response;
      });
    }
  }, {
    key: 'flights',
    value: function flights() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.call('flights', params).then(function (response) {
        return response;
      });
    }
  }, {
    key: 'call',
    value: function call(method) {
      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var defaultParams = { v: 2 };
      var queryParams = { arrayFormat: 'brackets' };
      var url = API + method;
      var request = _unirest2.default.get(url).query(_qs2.default.stringify(Object.assign(defaultParams, params), queryParams));

      return new Promise(function (resolve, reject) {
        request.end(function (response) {
          if (response.error) {
            reject(response.error);
          } else {
            resolve(response.body);
          }
        });
      });
    }
  }]);

  return KiwiAPI;
}();

exports.default = KiwiAPI;
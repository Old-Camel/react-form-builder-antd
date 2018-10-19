'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorRemind = exports.dealOverflowMsg = exports.download = exports.setI18n = exports.i18n = exports.dealErrorMessage = exports.getStrFromData = exports.formatDateYMDHMS0 = exports.formatDateYMD = exports.post = exports.ajax = exports.isIE11 = undefined;

var _message2 = require('antd/es/message');

var _message3 = _interopRequireDefault(_message2);

var _modal = require('antd/es/modal');

var _modal2 = _interopRequireDefault(_modal);

require('antd/es/message/style/css');

require('antd/es/modal/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isIE11 = exports.isIE11 = /Trident\/7\./.test(navigator.userAgent);
var ajax = exports.ajax = function ajax(way, url) {
  for (var _len = arguments.length, rest = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    rest[_key - 4] = arguments[_key];
  }

  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var resType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';

  /*构造promise函数构造函数*/
  var promiseConstructor = function promiseConstructor() {
    var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
      return e;
    };
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (e) {
      return e;
    };

    var xhr = new XMLHttpRequest(); /*获取ajax对象*/
    var string = '';
    xhr.open(way, url, true); /*发起请求*/
    xhr.responseType = resType;
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    for (var i in data) {
      if (data[i] === null || data[i] === undefined) {
        continue;
      }
      string += '&' + i + '=' + encodeURIComponent(data[i]);
    }
    xhr.send(string.replace('&', '')); /*请求参数*/
    /**
     * 成功回调
     * @param e
     */
    xhr.onload = function (e) {
      console.log('aaa', e);
      var res = e.currentTarget.response;
      if (isIE11) {
        res = JSON.parse(res);
      };
      success(res);
    };
    /*超时处理*/
    var timeout = function timeout(handlerObj) {
      xhr.timeout = handlerObj.timeout;
      xhr.ontimeout = handlerObj.fun;
    };
    xhr.onerror = function (e) {
      error(e);
    };
    rest[0] == null ? null : timeout(rest[1]);
    rest[1] == null ? null : xhr.onprogress(rest[2]);
  };
  return new Promise(promiseConstructor);
};
/*暂时除了post想不到用其他函数*/
var post = exports.post = function post(url) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    rest[_key2 - 3] = arguments[_key2];
  }

  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var resType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';

  if (window.noModify == true) {
    return _axios2.default.post(url, data).then(function (e) {
      return e.data;
    });
  }
  return ajax.apply(undefined, ['POST', url, data, resType].concat(rest));
};
/**
 * 时间格式化YYYY-MM-DD
 */
var formatDateYMD = exports.formatDateYMD = function formatDateYMD(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return year + '-' + month + '-' + day;
};
/**
 * 时间格式化YYYY-MM-DD 00:00:00
 */
var formatDateYMDHMS0 = exports.formatDateYMDHMS0 = function formatDateYMDHMS0(date) {
  return formatDateYMD(date) + ' 00:00:00';
};

/**
 * 将对象属性拼成一串a=b c=d
 */
var getStrFromData = exports.getStrFromData = function getStrFromData(data) {
  var str = '';
  for (var j in data) {
    str += j + '="' + data[j] + '" ';
  };
  return str;
};

/**
 * 处理报错信息
 */
var dealErrorMessage = exports.dealErrorMessage = function dealErrorMessage(messages, menuKey) {
  _modal2.default.error({ content: _react2.default.createElement(
      'div',
      null,
      messages.split('<!------!>').map(function (d, i) {
        return _react2.default.createElement(
          'div',
          null,
          d ? i18n(d, menuKey) : null
        );
      })
    ) });
};

var i18n = exports.i18n = function i18n(e) {
  return e;
};
var setI18n = exports.setI18n = function setI18n(fun) {
  exports.i18n = i18n = fun;
};

var download = exports.download = function download(url, filename) {
  var that = undefined;
  return new Promise(function (resolves) {
    getBlob(url).then(function (blob) {
      saveAs(blob, filename);
      resolves('success');
    });
    function getBlob(url) {
      return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(xhr.response);
          }
        };
        xhr.send();
      });
    }
    function saveAs(blob, filename) {
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        var link = document.createElement('a');
        var body = document.querySelector('body');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.style.display = 'none';
        body.appendChild(link);
        link.click();
        body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      }
    }
  });
};

var dealOverflowMsg = exports.dealOverflowMsg = function dealOverflowMsg(msg, number) {
  if (msg.length > number) {
    return msg.substr(0, number) + '...';
  }
  return msg;
};

var errorRemind = exports.errorRemind = function errorRemind(res, messge) {
  if (res && res.message != '') {
    var msg = res.message.split('<!------!>').splice(msg.length - 1, 1);
    var content = _react2.default.createElement(
      'div',
      null,
      msg.map(function (item) {
        return _react2.default.createElement(
          'div',
          null,
          i18n(item)
        );
      })
    );
    _message3.default.error(content, 2.5);
  } else {
    _message3.default.error(messge, 2.5);
  }
};
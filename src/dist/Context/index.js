'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormConsume = exports.Provider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createContext = (0, _react.createContext)({}),
    Pro = _createContext.Provider,
    Consumer = _createContext.Consumer;

var Provider = exports.Provider = Pro;
var FormConsume = exports.FormConsume = function FormConsume(Component) {
  return function (props) {
    return _react2.default.createElement(
      Consumer,
      null,
      function (e) {
        return _react2.default.createElement(Component, _extends({}, props, e));
      }
    );
  };
};
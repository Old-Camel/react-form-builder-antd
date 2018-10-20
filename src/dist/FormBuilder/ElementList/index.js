'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _list = require('antd/es/list');

var _list2 = _interopRequireDefault(_list);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/es/list/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

var _Context = require('@/Context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementList = (0, _Context.FormConsume)(_class = function (_Component) {
  _inherits(ElementList, _Component);

  function ElementList() {
    _classCallCheck(this, ElementList);

    return _possibleConstructorReturn(this, (ElementList.__proto__ || Object.getPrototypeOf(ElementList)).apply(this, arguments));
  }

  _createClass(ElementList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.state.elementTypes,
          addElement = _props.addElement;

      return _react2.default.createElement(_list2.default, {
        header: _react2.default.createElement(
          'div',
          { style: { width: 100 } },
          'item'
        ),
        locale: { 'emptyText': '\u6293\u70B9\u6570\u636E\u6765' },
        bordered: true,
        dataSource: data,
        renderItem: function renderItem(item) {
          return _react2.default.createElement(
            _list2.default.Item,
            null,
            _react2.default.createElement(_Element2.default, {
              item: item,
              addElement: addElement
            })
          );
        }
      });
    }
  }]);

  return ElementList;
}(_react.Component)) || _class;

exports.default = ElementList;
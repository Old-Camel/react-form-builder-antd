'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

require('antd/es/form/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Context = require('@/Context');

var _reactDnd = require('react-dnd');

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _styled = require('@/styled');

var _PriviewItem = require('./PriviewItem');

var _PriviewItem2 = _interopRequireDefault(_PriviewItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//预览单个元素


var FormItem = _form2.default.Item;
var type = ['ELEMENT'];
//放置目标处理集合
var target = {
  canDrop: function canDrop(props) {
    return props.state.data.length == 0;
  },
  drop: function drop(props, monitor, component) {
    var _monitor$getItem = monitor.getItem(),
        element = _monitor$getItem.item;

    var addElement = props.state.actions.addElement;

    addElement(element);
  }
};

var Priview = (_dec = (0, _reactDnd.DropTarget)(type, target, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}), (0, _Context.FormConsume)(_class = _dec(_class = function (_Component) {
  _inherits(Priview, _Component);

  function Priview() {
    _classCallCheck(this, Priview);

    return _possibleConstructorReturn(this, (Priview.__proto__ || Object.getPrototypeOf(Priview)).apply(this, arguments));
  }

  _createClass(Priview, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.state.data !== nextProps.state.data;
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('Priview render');
      var _props = this.props,
          _props$state = _props.state,
          editing = _props$state.editing,
          editingData = _props$state.editingData,
          editingIndex = _props$state.editingIndex,
          editShow = _props$state.editShow,
          editingClose = _props$state.editingClose,
          setEditingData = _props$state.setEditingData,
          setGroupData = _props$state.setGroupData,
          addGroupData = _props$state.addGroupData,
          deleteGroupData = _props$state.deleteGroupData,
          data = _props$state.data,
          length = _props$state.data.length,
          moveElement = _props$state.moveElement,
          createElement = _props$state.createElement,
          setDownElement = _props$state.setDownElement,
          design = _props$state.design,
          connectDropTarget = _props.connectDropTarget,
          form = _props.form,
          _props$form = _props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldsValue = _props$form.getFieldsValue;

      return connectDropTarget && connectDropTarget(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _form2.default,
          null,
          length == 0 ? _react2.default.createElement(
            'div',
            null,
            '\u6293\u70B9\u6765'
          ) : data.map(function (e, i) {
            return _react2.default.createElement(_PriviewItem2.default, {
              design: design,
              form: form,
              item: e,
              editShow: editShow,
              data: data,
              moveElement: moveElement,
              setDownElement: setDownElement,
              createElement: createElement
            });
          })
        )
      ));
    }
  }]);

  return Priview;
}(_react.Component)) || _class) || _class);
exports.default = Priview;
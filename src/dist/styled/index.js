'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowMB10 = exports.SpanLH32 = exports.CursorIcon = undefined;

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/es/row/style/css');

require('antd/es/icon/style/css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CursorIcon = exports.CursorIcon = (0, _styledComponents2.default)(_icon2.default).withConfig({
  displayName: 'styled__CursorIcon',
  componentId: 'ks49l4-0'
})(['cursor:pointer;']);

var SpanLH32 = exports.SpanLH32 = _styledComponents2.default.span.withConfig({
  displayName: 'styled__SpanLH32',
  componentId: 'ks49l4-1'
})(['line-height:32px;']);

var RowMB10 = exports.RowMB10 = (0, _styledComponents2.default)(_row2.default).withConfig({
  displayName: 'styled__RowMB10',
  componentId: 'ks49l4-2'
})(['margin-bottom:10px;']);
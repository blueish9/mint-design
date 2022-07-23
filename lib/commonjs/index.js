"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let { ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "asd"));
};

const styles = _reactNative.StyleSheet.create({});

var _default = /*#__PURE__*/_react.default.memo(Button);

exports.default = _default;
//# sourceMappingURL=index.js.map
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Tag = exports.Container = void 0;
var styled_components_1 = require("styled-components");
;
exports.Container = styled_components_1["default"].li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n\n\n  list-style:none; \n  \n  borde-radius:5px;\n  margin: 10px 0;\n  padding:12px 10px;\n\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n\n  cursor:pointer;\n  transition: all .3s;\n\n  position:relative;\n\n  &:hover{\n    opacity:.7;\n    transform: translateX(10px);\n  }\n  > div{\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between;\n\n    padding-left:10px;\n  }\n\n\n  "], ["\n  background-color: ", ";\n\n\n  list-style:none; \n  \n  borde-radius:5px;\n  margin: 10px 0;\n  padding:12px 10px;\n\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n\n  cursor:pointer;\n  transition: all .3s;\n\n  position:relative;\n\n  &:hover{\n    opacity:.7;\n    transform: translateX(10px);\n  }\n  > div{\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between;\n\n    padding-left:10px;\n  }\n\n\n  "])), function (props) { return props.theme.colors.secondary; });
exports.Tag = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width:10px;\n    height:60%;\n\n    background-color: ", ";\n\n    position:absolute;\n    left:0;\n\n"], ["\n    width:10px;\n    height:60%;\n\n    background-color: ", ";\n\n    position:absolute;\n    left:0;\n\n"])), function (props) { return props.color; });
var templateObject_1, templateObject_2;

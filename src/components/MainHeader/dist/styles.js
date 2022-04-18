"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.UserName = exports.Welcome = exports.Profile = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n     grid-area:MH;\n    \n    background-color:", ";\n    border-bottom:1px solid ", ";\n\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    padding: 0 10px;\n"], ["\n     grid-area:MH;\n    \n    background-color:", ";\n    border-bottom:1px solid ", ";\n\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    padding: 0 10px;\n"])), function (props) { return props.theme.colors.secondary; }, function (props) { return props.theme.colors.border; });
exports.Profile = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", "\n\n     "], ["\n    color: ", "\n\n     "])), function (props) { return props.theme.colors.white; });
exports.Welcome = styled_components_1["default"].h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n     "], ["\n     "])));
exports.UserName = styled_components_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n"], ["\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

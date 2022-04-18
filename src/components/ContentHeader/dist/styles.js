"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Controllers = exports.TitleContainer = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n\n    display:flex;\n    justify-content:space-between;\n\n    margin-bottom:25px;\n\n"], ["\n    width: 100%;\n\n    display:flex;\n    justify-content:space-between;\n\n    margin-bottom:25px;\n\n"])));
exports.TitleContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    > h1{\n        color:", ";\n\n        &::after{\n            content:'';\n            display:block;\n            width:55px;\n            border-bottom:10px solid ", ";\n        }\n    }\n"], ["\n    > h1{\n        color:", ";\n\n        &::after{\n            content:'';\n            display:block;\n            width:55px;\n            border-bottom:10px solid ", ";\n        }\n    }\n"])), function (props) { return props.theme.colors.white; }, function (props) { return props.lineColor; });
exports.Controllers = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display:flex;\n    \n"], ["\n    display:flex;\n    \n"])));
var templateObject_1, templateObject_2, templateObject_3;

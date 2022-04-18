"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    grid-area:CT;\n\n    color:", ";\n    background-color:", ";\n\n    padding:25px;\n\n    height:calc (100vh - 70px); /*View Port Height*/\n\n    overflow-y:scroll;\n\n    ::-webkit-scrollbar{\n        width:10px;\n    }\n    ::-webkit-scrollbar-thumb{\n        background-color: ", ";\n        border-radius:10px;\n    }\n    ::-webkit-scrollbar-track{\n        background-color: ", ";\n        border-radius:10px;\n    }\n"], ["\n    grid-area:CT;\n\n    color:", ";\n    background-color:", ";\n\n    padding:25px;\n\n    height:calc (100vh - 70px); /*View Port Height*/\n\n    overflow-y:scroll;\n\n    ::-webkit-scrollbar{\n        width:10px;\n    }\n    ::-webkit-scrollbar-thumb{\n        background-color: ", ";\n        border-radius:10px;\n    }\n    ::-webkit-scrollbar-track{\n        background-color: ", ";\n        border-radius:10px;\n    }\n"])), function (props) { return props.theme.colors.white; }, function (props) { return props.theme.colors.tertiary; }, function (props) { return props.theme.colors.secondary; }, function (props) { return props.theme.colors.tertiary; });
var templateObject_1;

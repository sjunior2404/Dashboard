"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ToogleSelector = exports.ToogleLabel = exports.Container = void 0;
var styled_components_1 = require("styled-components");
var react_switch_1 = require("react-switch");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display:flex;\n    align-items:center;\n"], ["\n    display:flex;\n    align-items:center;\n"])));
exports.ToogleLabel = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color:", "\n"], ["\n    color:", "\n"])), function (props) { return props.theme.colors.white; });
exports.ToogleSelector = styled_components_1["default"](react_switch_1["default"]).attrs(function (_a) {
    var theme = _a.theme;
    return ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    });
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin:0 7px;\n"], ["\n    margin:0 7px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

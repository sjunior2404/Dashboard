"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var SelectInput = function (_a) {
    var options = _a.options;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement("select", null, options.map(function (option) { return (react_1["default"].createElement("option", { value: option.value }, option.label)); }))));
};
exports["default"] = SelectInput;

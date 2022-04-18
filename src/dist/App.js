"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var GlobalStyles_1 = require("./styles/GlobalStyles");
var List_1 = require("./pages/List");
var dark_1 = require("./styles/themes/dark");
var App = function () {
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: dark_1["default"] },
        react_1["default"].createElement(GlobalStyles_1["default"], null),
        react_1["default"].createElement(List_1["default"], null)));
};
exports["default"] = App;

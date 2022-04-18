"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var ContentHeader = function (_a) {
    var title = _a.title, lineColor = _a.lineColor, children = _a.children;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.TitleContainer, { lineColor: lineColor },
            react_1["default"].createElement("h1", null, title)),
        react_1["default"].createElement(styles_1.Controllers, null, children)));
};
exports["default"] = ContentHeader;

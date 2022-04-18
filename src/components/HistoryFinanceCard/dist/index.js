"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var HistoryFinanceCard = function (_a) {
    var tagColor = _a.tagColor, title = _a.title, subtitle = _a.subtitle, amount = _a.amount;
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Tag, { color: tagColor }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("span", null, title),
            react_1["default"].createElement("small", null, subtitle)),
        react_1["default"].createElement("h3", null, amount)));
};
exports["default"] = HistoryFinanceCard;

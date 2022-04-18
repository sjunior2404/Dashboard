"use strict";
exports.__esModule = true;
var react_1 = require("react");
var emojis_1 = require("../../utils/emojis");
var styles_1 = require("./styles");
var MainHeader = function () {
    var emoji = react_1.useMemo(function () {
        var indice = Math.floor(Math.random() * emojis_1["default"].length);
        return emojis_1["default"][indice];
    }, []);
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement("h1", null, "Toogle"),
        react_1["default"].createElement(styles_1.Profile, null,
            react_1["default"].createElement(styles_1.Welcome, null,
                "Ol\u00E1, ",
                emoji),
            react_1["default"].createElement(styles_1.UserName, null, "S\u00E9rgio Jos\u00E9 J\u00FAnior"))));
};
exports["default"] = MainHeader;

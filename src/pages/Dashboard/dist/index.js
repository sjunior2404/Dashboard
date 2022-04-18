"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContentHeader_1 = require("../../components/ContentHeader");
var SelectInput_1 = require("../../components/SelectInput");
var styles_1 = require("./styles");
var Dashboard = function () {
    var options = [
        { value: 'Rodrigo', label: 'Rodrigo' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' }
    ];
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(ContentHeader_1["default"], { title: "DashBoard", lineColor: "#f7931B" },
            react_1["default"].createElement(SelectInput_1["default"], { options: options }))));
};
exports["default"] = Dashboard;

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContentHeader_1 = require("../../components/ContentHeader");
var SelectInput_1 = require("../../components/SelectInput");
var HistoryFinanceCard_1 = require("../../components/HistoryFinanceCard");
var styles_1 = require("./styles");
var List = function () {
    var months = [
        { value: '7', label: 'Julho' },
        { value: '8', label: 'Agosto' },
        { value: '9', label: 'Setembro' }
    ];
    var years = [
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 }
    ];
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(ContentHeader_1["default"], { title: "Sa\u00EDdas", lineColor: "#E44C4E" },
            react_1["default"].createElement(SelectInput_1["default"], { options: months }),
            react_1["default"].createElement(SelectInput_1["default"], { options: years })),
        react_1["default"].createElement(styles_1.Filters, null,
            react_1["default"].createElement("button", { type: "button", className: "tag-filter tag-filter-recurrent" }, "Recorrentes"),
            react_1["default"].createElement("button", { type: "button", className: "tag-filter tag-filter-eventual" }, "Eventuais")),
        react_1["default"].createElement(styles_1.Content, null,
            react_1["default"].createElement(HistoryFinanceCard_1["default"], { tagColor: "#E44C4E", title: "Conta de Luz", subtitle: "27/07/2020", amount: "R$ 130,00" }))));
};
exports["default"] = List;

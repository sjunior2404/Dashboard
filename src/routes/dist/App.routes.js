"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("../components/Layout");
var Dashboard_1 = require("../pages/Dashboard");
var List_1 = require("../pages/List");
var AppRoutes = function () { return (react_1["default"].createElement(Layout_1["default"], null,
    react_1["default"].createElement(react_router_dom_1.Switch, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/dashboard", exact: true, component: Dashboard_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/list/:type", exact: true, component: List_1["default"] })))); };
exports["default"] = AppRoutes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.OrderType = void 0;
var OrderType;
(function (OrderType) {
    OrderType[OrderType["BUY"] = 0] = "BUY";
    OrderType[OrderType["SELL"] = 1] = "SELL";
})(OrderType || (exports.OrderType = OrderType = {}));
var ActionType;
(function (ActionType) {
    ActionType[ActionType["ADD"] = 0] = "ADD";
    ActionType[ActionType["REMOVE"] = 1] = "REMOVE";
})(ActionType || (exports.ActionType = ActionType = {}));
//# sourceMappingURL=enums.js.map
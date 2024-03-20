"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var enums_1 = require("./enums");
var Action = /** @class */ (function () {
    function Action(orderId, orderType, actionType, price, quantity) {
        this.orderId = orderId;
        this.orderType = orderType;
        this.actionType = actionType;
        this.price = price;
        this.quantity = quantity;
    }
    Action.createAction = function (givenOrder) {
        var orderType = givenOrder.Order === "Buy" ? enums_1.OrderType.BUY : enums_1.OrderType.SELL;
        var actionType = givenOrder.Type === "Add" ? enums_1.ActionType.ADD : enums_1.ActionType.REMOVE;
        // console.log("!!!!!!!!!!!!!!!!!!!");
        // console.log(givenOrder);
        // console.log(orderType);
        // let temp = new Action(givenOrder.Id, orderType, actionType, givenOrder.Price, givenOrder.Quantity);
        // console.log(temp.orderType);
        // console.trace()
        // console.log("!!!!!!!!!!!!!!!!!!!");
        return new Action(givenOrder.Id, orderType, actionType, givenOrder.Price, givenOrder.Quantity);
    };
    Action.prototype.toString = function () {
        var orderType = this.orderType === enums_1.OrderType.BUY ? "Buy" : "Sell";
        var actionType = this.actionType === enums_1.ActionType.ADD ? "Add" : "Remove";
        return "Id: ".concat(this.orderId, "  Order: ").concat(orderType, "  Type: ").concat(actionType, "  Price: $").concat(this.price, "  Quantity: ").concat(this.quantity);
    };
    return Action;
}());
exports.Action = Action;
//# sourceMappingURL=action.js.map
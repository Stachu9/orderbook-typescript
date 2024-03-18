"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var enums_1 = require("./enums");
var Order = /** @class */ (function () {
    function Order(action) {
        this.actions = [];
        this.actions.push(action);
    }
    Order.prototype.getId = function () {
        return this.actions[0].orderId;
    };
    Order.prototype.getOrderType = function () {
        return this.actions[0].orderType;
    };
    Order.prototype.getPrice = function () {
        return this.actions[0].price;
    };
    Order.prototype.getQuantity = function () {
        return this.actions.reduce(function (a, b) { return b.actionType === enums_1.ActionType.ADD ? a + b.quantity : a - b.quantity; }, 0);
    };
    Order.prototype.toString = function () {
        var typeOfOrder = this.getOrderType() === enums_1.OrderType.BUY ? "Buy" : "Sell";
        return "Id: ".concat(this.getId(), "  Order type: ").concat(typeOfOrder, "  Price: $").concat(this.getPrice(), "  Quantity: ").concat(this.getQuantity());
    };
    Order.prototype.addAction = function (action) {
        if (!(this.getId() === action.orderId)) {
            throw new Error("Action id doesn't match");
        }
        else if (!(this.getOrderType() === action.orderType)) {
            throw new Error("Action order type doesn't match");
        }
        else if (!(this.getPrice() === action.price)) {
            throw new Error("Action price doesn't match");
        }
        this.actions.push(action);
    };
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map
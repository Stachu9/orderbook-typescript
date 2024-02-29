var Action = /** @class */ (function () {
    function Action(orderId, orderType, actionType, price, quantity) {
        this.orderId = orderId;
        this.orderType = orderType;
        this.actionType = actionType;
        this.price = price;
        this.quantity = quantity;
    }
    Action.createAction = function (givenOrder) {
        var orderType = givenOrder.Order === "Buy" ? OrderType.BUY : OrderType.SELL;
        var actionType = givenOrder.Type === "Add" ? ActionType.ADD : ActionType.REMOVE;
        return new Action(givenOrder.Id, orderType, actionType, givenOrder.Price, givenOrder.Quantity);
    };
    Action.prototype.toString = function () {
        var orderType = this.orderType === OrderType.BUY ? "Buy" : "Sell";
        var actionType = this.actionType === ActionType.ADD ? "Add" : "Remove";
        return "Id: ".concat(this.orderId, "  Order: ").concat(orderType, "  Type: ").concat(actionType, "  Price: $").concat(this.price, "  Quantity: ").concat(this.quantity);
    };
    return Action;
}());
//# sourceMappingURL=action.js.map
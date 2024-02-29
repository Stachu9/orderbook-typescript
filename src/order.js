var Order = /** @class */ (function () {
    function Order(action) {
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
        function addQuantity(a, b) {
            if (b.actionType === ActionType.ADD) {
                return a + b.quantity;
            }
            else if (b.actionType === ActionType.REMOVE) {
                return a - b.quantity;
            }
        }
        return this.actions.reduce(addQuantity, 0);
    };
    return Order;
}());
//# sourceMappingURL=order.js.map
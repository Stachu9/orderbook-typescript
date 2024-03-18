"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBook = void 0;
var order_1 = require("./order");
var enums_1 = require("./enums");
var OrderBook = /** @class */ (function () {
    function OrderBook() {
        this.orders = new Map();
    }
    OrderBook.prototype.addAction = function (action) {
        if (this.orders.has(action.orderId)) {
            this.orders.get(action.orderId).addAction(action);
        }
        else {
            this.orders.set(action.orderId, new order_1.Order(action));
        }
    };
    OrderBook.prototype.getOrders = function () {
        return this.orders;
    };
    OrderBook.prototype.findBestOfferToBuy = function () {
        var bestOfferToBuy;
        this.orders.forEach(function (order) {
            if (order.getOrderType() === enums_1.OrderType.SELL) {
                if (bestOfferToBuy) {
                    if (bestOfferToBuy.price === order.getPrice()) {
                        bestOfferToBuy.quantity += order.getQuantity();
                    }
                    else if (bestOfferToBuy.price > order.getPrice()) {
                        bestOfferToBuy.price = order.getPrice();
                        bestOfferToBuy.quantity = order.getQuantity();
                    }
                }
                else {
                    bestOfferToBuy = {
                        price: order.getPrice(),
                        quantity: order.getQuantity()
                    };
                }
            }
        });
        return bestOfferToBuy;
    };
    OrderBook.prototype.findBestOfferToSell = function () {
        var bestOfferToSell;
        this.orders.forEach(function (order) {
            if (order.getOrderType() === enums_1.OrderType.BUY) {
                if (bestOfferToSell) {
                    if (bestOfferToSell.price === order.getPrice()) {
                        bestOfferToSell.quantity += order.getQuantity();
                    }
                    else if (bestOfferToSell.price < order.getPrice()) {
                        bestOfferToSell.price = order.getPrice();
                        bestOfferToSell.quantity = order.getQuantity();
                    }
                }
                else {
                    bestOfferToSell = {
                        price: order.getPrice(),
                        quantity: order.getQuantity()
                    };
                }
            }
        });
        return bestOfferToSell;
    };
    return OrderBook;
}());
exports.OrderBook = OrderBook;
//# sourceMappingURL=orderBook.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderBook_1 = require("./orderBook");
var given_orders_1 = require("./given_orders");
var action_1 = require("./action");
function main() {
    var orderBook = new orderBook_1.OrderBook();
    console.log("No active orders");
    given_orders_1.givenOrders.forEach(function (givenOrder) {
        console.log();
        //input
        console.log();
        console.log();
        console.log("-----------------------------");
        var action = action_1.Action.createAction(givenOrder);
        orderBook.addAction(action);
        var bestSharesToBuy = orderBook.findBestOfferToBuy();
        var bestSharesToSell = orderBook.findBestOfferToSell();
        console.log("Order added in this step from the given list:");
        console.log(action.toString());
        console.log();
        console.log("Actual orderbook:");
        orderBook.getOrders()
            .filter(function (order) { return order.getQuantity() !== 0; })
            .forEach(function (order) { return console.log(order.toString()); });
        console.log();
        if (bestSharesToBuy) {
            console.log("The best you can buy is  ".concat(bestSharesToBuy.quantity, "  shares at price $").concat(bestSharesToBuy.price));
        }
        else {
            console.log("The best you can buy is - no SELL offers in orderbook");
        }
        if (bestSharesToSell) {
            console.log("The best you can sell is  ".concat(bestSharesToSell.quantity, "  shares at price $").concat(bestSharesToSell.price));
        }
        else {
            console.log("The best you can sell is - no BUY offers in orderbook");
        }
    });
    console.log("No more given orders.");
}
main();
//# sourceMappingURL=main.js.map
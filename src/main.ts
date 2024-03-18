import {OrderBook} from "./orderBook";
import {givenOrders} from "./given_orders";
import {Action} from "./action";
import {Order} from "./order";

function main(): void {

  const orderBook: OrderBook = new OrderBook();

  console.log("No active orders");

  for (let i = 0; i < givenOrders.length; i++) {

    console.log();
    //input
    console.log();
    console.log();
    console.log("-----------------------------");

    let action: Action = Action.createAction((givenOrders[i]));
    orderBook.addAction(action);
    let bestSharesToBuy = orderBook.findBestOfferToBuy();
    let bestSharesToSell = orderBook.findBestOfferToSell();

    console.log("Order added in this step from the given list:");
    console.log(action.toString());
    console.log();
    console.log("Actual orderbook:");

    orderBook.getOrders()
      .filter((order: Order) => order.getQuantity() !== 0)
      .forEach((order) => console.log(order.toString()));

    console.log()
    if (bestSharesToBuy) {
      console.log(`The best you can buy is  ${bestSharesToBuy.quantity}  shares at price $${bestSharesToBuy.price}`);
    } else {
      console.log("The best you can buy is - no SELL offers in orderbook");
    }
    if (bestSharesToSell) {
      console.log(`The best you can sell is  ${bestSharesToSell.quantity}  shares at price $${bestSharesToSell.price}`);
    } else {
      console.log("The best you can sell is - no BUY offers in orderbook")
    }

  }

  console.log("No more given orders.")
}

main();
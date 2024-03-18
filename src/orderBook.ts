import {Order} from "./order";
import {Action} from "./action";
import {OrderType} from "./enums";

export class OrderBook {

  private orders: Map<number, Order> = new Map();

  public addAction(action: Action): void {
    if (this.orders.has(action.orderId)) {
      this.orders.get(action.orderId).addAction(action);
    } else {
      this.orders.set(action.orderId, new Order(action));
    }
  }

  public getOrders(): Order[] {
    return Array.from(this.orders.values());
  }

  public findBestOfferToBuy(): {price: number; quantity: number} | undefined {
    let bestOfferToBuy: {price: number; quantity: number};

    this.orders.forEach((order: Order): void => {
      if (order.getOrderType() === OrderType.SELL) {
        if (bestOfferToBuy) {
          if (bestOfferToBuy.price === order.getPrice()) {
            bestOfferToBuy.quantity += order.getQuantity();
          } else if (bestOfferToBuy.price > order.getPrice()) {
            bestOfferToBuy.price = order.getPrice();
            bestOfferToBuy.quantity = order.getQuantity();
          }
        } else {
          bestOfferToBuy = {
            price: order.getPrice(),
            quantity: order.getQuantity()
          };
        }
      }
    });

    return bestOfferToBuy;
  }

  public findBestOfferToSell(): {price: number; quantity: number} | undefined {
    let bestOfferToSell: {price: number; quantity: number};

    this.orders.forEach((order: Order): void => {
      if (order.getOrderType() === OrderType.BUY) {
        if (bestOfferToSell) {
          if (bestOfferToSell.price === order.getPrice()) {
            bestOfferToSell.quantity += order.getQuantity();
          } else if (bestOfferToSell.price < order.getPrice()) {
            bestOfferToSell.price = order.getPrice();
            bestOfferToSell.quantity = order.getQuantity();
          }
        } else {
          bestOfferToSell = {
            price: order.getPrice(),
            quantity: order.getQuantity()
          };
        }
      }
    });

    return bestOfferToSell;
  }

}
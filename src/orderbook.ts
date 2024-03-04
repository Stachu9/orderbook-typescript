class Orderbook {

  private orders: Map<number, Order> = new Map()

  public addAction(action: Action): void {
    if (this.orders.has(action.orderId)) {
      this.orders.get(action.orderId).addAction(action);
    } else {
      this.orders.set(action.orderId, new Order(action));
    }
  }

  public findBestOfferToBuy(): {price: number; quantity: number} {
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

}
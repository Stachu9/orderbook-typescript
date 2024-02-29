class Orderbook {

  private orders

  constructor() {}

  public addAction(action: Action): void {

    if (action.orderId in this.orders) {
      this.orders[action.orderId].addAction(action);
    } else {
      this.orders[action.orderId] = new Order(action)
    }
  }

  public findBestOfferToBuy(): {price: number; quantity: number} {

    let bestOfferToBuy = {};

    for (let order of this.orders) {
      if (order.getOrderType() === OrderType.SELL) {
        if (bestOfferToBuy) {
          if (bestOfferToBuy.price === order.getPrice()) {
            bestOfferToBuy.quantity += order.getQuantity();
          } else if (bestOfferToBuy.price > order.getPrice()) {
            bestOfferToBuy.price = order.getPrice();
            bestOfferToBuy.quantity = order.getQuantity;
          }
        } else {
          bestOfferToBuy.price = order.getPrice();
          bestOfferToBuy.quantity = order.getQuantity();
        }
      }
    }
    return bestOfferToBuy;
  }

}
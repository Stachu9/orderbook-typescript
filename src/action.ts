class Action {
  constructor(public readonly orderId: number,
              public readonly orderType: OrderType,
              public readonly actionType: ActionType,
              public readonly price: number,
              public readonly quantity: number) {}
  public static createAction(givenOrder: GivenOrder): Action {
    const orderType: OrderType = givenOrder.Order === "Buy" ? OrderType.BUY : OrderType.SELL;
    const actionType: ActionType = givenOrder.Type === "Add" ? ActionType.ADD : ActionType.REMOVE;

    return new Action(givenOrder.Id, orderType, actionType, givenOrder.Price, givenOrder.Quantity)
  }

  public toString(): string {
    const orderType: string = this.orderType === OrderType.BUY ? "Buy" : "Sell";
    const actionType: string = this.actionType === ActionType.ADD ? "Add" : "Remove";

    return "Id: {}  Order: {}  Type: {}  Price: {}$  Quantity: {}".format(self.orderId, orderType, actionType, self.price, self.quantity)
  }
}
import {ActionType, OrderType} from "./enums";
import {GivenOrder} from "./given_orders";

export class Action {
  private constructor(public readonly orderId: number,
              public readonly orderType: OrderType,
              public readonly actionType: ActionType,
              public readonly price: number,
              public readonly quantity: number) {}
  public static createAction(givenOrder: GivenOrder): Action {
    const orderType: OrderType = givenOrder.Order === "Buy" ? OrderType.BUY : OrderType.SELL;
    const actionType: ActionType = givenOrder.Type === "Add" ? ActionType.ADD : ActionType.REMOVE;

    // console.log("!!!!!!!!!!!!!!!!!!!");
    // console.log(givenOrder);
    // console.log(orderType);
    // let temp = new Action(givenOrder.Id, orderType, actionType, givenOrder.Price, givenOrder.Quantity);
    // console.log(temp.orderType);
    // console.trace()
    // console.log("!!!!!!!!!!!!!!!!!!!");

    return new Action(givenOrder.Id, orderType, actionType, givenOrder.Price, givenOrder.Quantity)
  }

  public toString(): string {
    const orderType: string = this.orderType === OrderType.BUY ? "Buy" : "Sell";
    const actionType: string = this.actionType === ActionType.ADD ? "Add" : "Remove";

    return `Id: ${this.orderId}  Order: ${orderType}  Type: ${actionType}  Price: $${this.price}  Quantity: ${this.quantity}`
  }
}
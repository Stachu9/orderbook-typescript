import {Action} from "./action";
import {ActionType, OrderType} from "./enums";

export class Order {

  private actions: Action[] = [];

  constructor(action: Action) {
    this.actions.push(action);
  }

  public getId(): number {
    return this.actions[0].orderId;
  }

  public getOrderType(): OrderType {
    return this.actions[0].orderType;
  }

  public getPrice(): number {
    return this.actions[0].price
  }

  public getQuantity(): number {

    return this.actions.reduce((a: number, b: Action): number => b.actionType === ActionType.ADD ? a + b.quantity : a - b.quantity, 0)
  }

  public toString(): string {
    const typeOfOrder: string = this.getOrderType() === OrderType.BUY ? "Buy" : "Sell";
    return `Id: ${this.getId()}  Order type: ${typeOfOrder}  Price: $${this.getPrice()}  Quantity: ${this.getQuantity()}`;
  }

  public addAction(action: Action): void {

    if (!(this.getId() === action.orderId)) {
      throw new Error("Action id doesn't match");
    } else if (!(this.getOrderType() === action.orderType)) {
      throw new Error("Action order type doesn't match");
    } else if (!( this.getPrice() === action.price)) {
      throw new Error("Action price doesn't match");
    }
    this.actions.push(action);
  }

}
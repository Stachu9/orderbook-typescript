import {Action} from "./action";
import {givenOrders} from "./given_orders";
import {ActionType, OrderType} from "./enums";


describe("Action", () => {

    let action: Action;

  describe("when new BUY action is created", () => {

    beforeEach(() => {
      action = Action.createAction({
        "Id": 1,
        "Order": "Buy",
        "Type": "Add",
        "Price": 20.0,
        "Quantity": 100
      });
    });

    it("should be OrderType.BUY", () => {
      expect(action.orderType).toBe(OrderType.BUY);
    });

    describe("when string output called", () => {

      let stringOutput: string;
      beforeEach(() => {
        stringOutput = action.toString();
      });

      it("should return text", () => {
        expect(stringOutput).toBe("Id: 1  Order: Buy  Type: Add  Price: $20  Quantity: 100");
      });
    });
  });

  describe("when new SELL action is created", () => {

    beforeEach(() => {
      action = Action.createAction({
        "Id": 1,
        "Order": "Sell",
        "Type": "Add",
        "Price": 20.0,
        "Quantity": 100
      });
    });

    it("should be OrderType.SELL", () => {
      expect(action.orderType).toBe(OrderType.SELL);
    });

    describe("when string output called", () => {

      it("should return text", () => {
        expect(action.toString()).toBe("Id: 1  Order: Sell  Type: Add  Price: $20  Quantity: 100");
      });
    });
  });

  describe("when new ADD action is created", () => {

    beforeEach(() => {
      action = Action.createAction({
        "Id": 1,
        "Order": "Buy",
        "Type": "Add",
        "Price": 20.0,
        "Quantity": 100
      });
    });

    it("should be ActionType.ADD", () => {
      expect(action.actionType).toBe(ActionType.ADD);
    });

    describe("when string output called", () => {

      it("should return text", () => {
        expect(action.toString()).toBe("Id: 1  Order: Buy  Type: Add  Price: $20  Quantity: 100");
      });
    });
  });

  describe("when new REMOVE action is created", () => {

    beforeEach(() => {
      action = Action.createAction({
        "Id": 1,
        "Order": "Sell",
        "Type": "Remove",
        "Price": 20.0,
        "Quantity": 100
      });
    });

    it("should be ActionType.REMOVE", () => {
      expect(action.actionType).toBe(ActionType.REMOVE);
    });

    describe("when string output called", () => {

      it("should return text", () => {
        expect(action.toString()).toBe("Id: 1  Order: Sell  Type: Remove  Price: $20  Quantity: 100");
      });
    });
  });

});


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("./action");
var enums_1 = require("./enums");
describe("Action", function () {
    var action;
    describe("when new BUY action is created", function () {
        beforeEach(function () {
            action = action_1.Action.createAction({
                "Id": 1,
                "Order": "Buy",
                "Type": "Add",
                "Price": 20.0,
                "Quantity": 100
            });
        });
        it("should be OrderType.BUY", function () {
            expect(action.orderType).toBe(enums_1.OrderType.BUY);
        });
        describe("when string output called", function () {
            var stringOutput;
            beforeEach(function () {
                stringOutput = action.toString();
            });
            it("should return text", function () {
                expect(stringOutput).toBe("Id: 1  Order: Buy  Type: Add  Price: $20  Quantity: 100");
            });
        });
    });
    describe("when new SELL action is created", function () {
        beforeEach(function () {
            action = action_1.Action.createAction({
                "Id": 1,
                "Order": "Sell",
                "Type": "Add",
                "Price": 20.0,
                "Quantity": 100
            });
        });
        it("should be OrderType.SELL", function () {
            expect(action.orderType).toBe(enums_1.OrderType.SELL);
        });
        describe("when string output called", function () {
            it("should return text", function () {
                expect(action.toString()).toBe("Id: 1  Order: Sell  Type: Add  Price: $20  Quantity: 100");
            });
        });
    });
    describe("when new ADD action is created", function () {
        beforeEach(function () {
            action = action_1.Action.createAction({
                "Id": 1,
                "Order": "Buy",
                "Type": "Add",
                "Price": 20.0,
                "Quantity": 100
            });
        });
        it("should be ActionType.ADD", function () {
            expect(action.actionType).toBe(enums_1.ActionType.ADD);
        });
        describe("when string output called", function () {
            it("should return text", function () {
                expect(action.toString()).toBe("Id: 1  Order: Buy  Type: Add  Price: $20  Quantity: 100");
            });
        });
    });
    describe("when new REMOVE action is created", function () {
        beforeEach(function () {
            action = action_1.Action.createAction({
                "Id": 1,
                "Order": "Sell",
                "Type": "Remove",
                "Price": 20.0,
                "Quantity": 100
            });
        });
        it("should be ActionType.REMOVE", function () {
            expect(action.actionType).toBe(enums_1.ActionType.REMOVE);
        });
        describe("when string output called", function () {
            it("should return text", function () {
                expect(action.toString()).toBe("Id: 1  Order: Sell  Type: Remove  Price: $20  Quantity: 100");
            });
        });
    });
});
//# sourceMappingURL=action.spec.js.map
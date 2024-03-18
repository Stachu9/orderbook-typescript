export interface GivenOrder {
  Id: number;
  Order: "Buy" | "Sell";
  Type: "Add" | "Remove";
  Price: number;
  Quantity: number;
}


export const givenOrders: GivenOrder[] = [
  {"Id": 1, "Order": "Buy", "Type": "Add", "Price": 20.0, "Quantity": 100},
  {"Id": 2, "Order": "Sell", "Type": "Add", "Price": 25.0, "Quantity": 200},
  {"Id": 3, "Order": "Buy", "Type": "Add", "Price": 23.0, "Quantity": 50},
  {"Id": 4, "Order": "Buy", "Type": "Add", "Price": 23.0, "Quantity": 70},
  {"Id": 3, "Order": "Buy", "Type": "Remove", "Price": 23.0, "Quantity": 50},
  {"Id": 5, "Order": "Sell", "Type": "Add", "Price": 28.0, "Quantity": 100}
];
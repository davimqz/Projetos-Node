import * as cartService from "./services/cart.js";
import createItem from "./services/Item.js";

const Mycart = [];
const MyWhishList = [];

console.log("Welcome to the your shopee Cart!");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 2);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

console.log(item1.subtotal());
console.log(item2.subtotal());

cartService.addItem(Mycart, item1);
cartService.addItem(MyWhishList, item2);

console.log("Shopee Cart! Total is: ");
await cartService.calculateTotal(Mycart);

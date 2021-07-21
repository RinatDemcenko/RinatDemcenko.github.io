// // 1
// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     showOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost;
//         this.orders.push(order);
//     },
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// //   легкотня
//   // 2

//   const inventory = {
//     items: ["Knife", "Gas mask"],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);
  
//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);
  
//       this.items = this.items.filter((item) => item !== itemName);
//     },
//   };
  
//   const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action.call(this, itemName);
//   };
  
//   invokeInventoryAction.call(inventory, "Medkit", inventory.add);
//   // Invoking action on Medkit
//   // Adding Medkit to inventory
  
//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
//   invokeInventoryAction.call(inventory, "Gas mask", inventory.remove);
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory
  
//   console.log(inventory.items); // ['Knife', 'Medkit']

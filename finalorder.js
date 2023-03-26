
// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.


const customerCart = [
    { name: "Widget", unitPrice: 5, quantity: 5 },
    { name: "Gizmo", unitPrice: 12, quantity: 3 },
    { name: "Thingamajig", unitPrice: 7, quantity: 10 }
  ];
  
  const totalCost = customerCart => customerCart.reduce((acc, product) => acc += product.quantity * product.unitPrice,0)
  console.log(totalCost(customerCart))
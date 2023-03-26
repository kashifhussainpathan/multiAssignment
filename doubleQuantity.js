// Q.10 You ard working on an e-commerce website where customers can add items to their cart. Ted cart stores the quantity of each item that ted customer wants to purchased in an array of numbers. However, the website is currently experiancing a bug where the quantity of each item is being recorded incorrectly by reducing it to half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart array to correct the bug.

const cart = [2, 4, 6, 8];

// Function to double the quantity of each item in the cart array
const doubleCartItems = (cartItems) => {
  const doubledItems = cartItems.map(item => item * 2);
  return doubledItems;
}

const updatedCart = doubleCartItems(cart);
console.log(updatedCart);
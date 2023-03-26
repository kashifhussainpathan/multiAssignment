// Q..7 in an online shopping application, customers can add multiple items to their cart. However, sometimes customers accidentally add the same item more than once, resulting in duplicate items in their cart. The duplicate items not only make it difficult for the customer to track the items they want to purchase but also affect the accuracy of the purchase order. write js program

const items = ['item1', 'item2', 'item1', 'item3', 'item2'];

const removeDuplicateItems = (arr) => {
  return [...new Set(arr)];
}

const updatedItems = removeDuplicateItems(items);

console.log(updatedItems);

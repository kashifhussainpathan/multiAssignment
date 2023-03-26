// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing

    function calculateBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill / numberOfPeople;
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  
  const bill = calculateBill(20, 4);
  console.log(bill);

  























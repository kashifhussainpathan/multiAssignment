const customer = {
    name: "John Doe",
    balance: 1000
  };
  
  const deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
  };
  
  const withdrawal = function(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    } else {
      console.log(`Insufficient funds. Current balance is ${this.balance}.`);
    }
  };
  
  console.log(customer.balance);
  
  deposit.call(customer, 500); 
  console.log(customer.balance); // Output: 1500
  
  withdrawal.call(customer, 200); // Output: Withdrew 200. New balance is 1300.
  console.log(customer.balance); // Output: 1300
  
  withdrawal.call(customer, 1500); // Output: Insufficient funds. Current balance is 1300.
  console.log(customer.balance); // Output: 1300
  
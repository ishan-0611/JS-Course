'use-strict';

// Encapsulation : Private Class Fields and Methods

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// Static version of these 4

class Account {
    // Public field
    locale = navigator.language;
    bank = 'Bankist';

    // Private field
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // this.movements = [];
        // this.locale = navigator.language;
  
        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface
    get_movements(){
      return this.#movements;
    }

    deposit(val) {
      this.#movements.push(val);
      return this;
    }
  
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
  
    // Private method
    #approveLoan(val) {
      return true;
    }
  
    requestLoan(val) {
      if (this.#approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
      }
      return this;
    }
}
  
const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(300);
// acc1.withdraw(100);

acc1.deposit(300).withdraw(100).requestLoan(500).withdraw(100);

console.log(acc1);
console.log(acc1.get_movements());
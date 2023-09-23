class Account {
    constructor(id, name) {
        this.id = Account.cretaInitialId();
        this.name = name;
    }

    #balance = 0;
    get balance() {
        return this.#balance;
    }
    set balance(newBalance) {
        if (typeof newBalance === 'number' && newBalance >= 0) {
            this.#balance = newBalance;
        }
    }
    credit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }

    }
    debit(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }

    }
    transferTo(otherAccount, amount) {
        this.debit(amount);
        otherAccount.credit(amount);
    }
   static cretaInitialId(){
        return Math.random().toString(16).slice(2);
    }
    static identifyAccounts(...accounts) {
        const accountsIds = accounts.map(account => account.id);
        return accountsIds.filter((id, index) => accountsIds.indexOf(id) === index);

    }
}
//const ac = new Account('saving',1000)
//console.log(ac.id);
//console.log(Account.cretaInitialId());

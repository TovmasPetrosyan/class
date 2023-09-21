class Account {
    constructor(id, name) {
        this.id = id;
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
    static identifyAccounts(...accounts) {
        const accountsIds = accounts.map(account => account.id);
        return accountsIds.filter((id, index) => accountsIds.indexOf(id) === index);

    }
}




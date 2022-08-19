class CurrentAccount{
    #agency = 0;
    #account = 0;
    #balance = 0;
    limit = 0;

    get agency(){
        return this.#agency;
    }

    set agency(agency){
        agency = this.#agency;
    }

    get account() {
        return this.#account;
    }

    set account(account) {
        account = this.#account;
    }

    get balance() {
        return this.#balance;
    }

    set balance(balance) {
        balance = this.#balance;
    }

    deposit(){
        this.#balance += 50;
        console.log("JUST DEPOSITED USD 50.00");
    }
    sacar(){
        this.#balance =- 50;
        console.log("JUST WITHDRAW USD 50.00");
    }
}

module.exports = CurrentAccount;
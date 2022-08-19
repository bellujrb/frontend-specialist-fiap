const CurrentAccount = require('./CurrentAccount');

class SpecialAccount extends CurrentAccount{
    
    constructor(){
        super();
        this.agencia = 4211;
        this.account = 2231;
        this.balance = 1000;
        this.limit = 5000;
    }

    payLimit(){
        this.limit -= 500;
        console.log("BUY SUCESS TODAY LIMIT IS " + this.limit);
    }
}

module.exports = SpecialAccount;

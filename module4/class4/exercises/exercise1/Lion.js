const Animal = require('./Animal');

class Lion extends Animal {

    constructor(){
        super();
        this.weight = 90;
        this.width = "1.50"
    }

    eat(){
        super.eat();
        this.weight += 5;
        console.log("Eating... new weight is " + this.weight)
    }

    go(){
        console.log("go Lionn!");
    }

    info(){
        console.log(this.weight);
        console.log(this.width);
    }
}

module.exports = Lion;
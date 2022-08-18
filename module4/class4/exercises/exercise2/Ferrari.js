const Car = require('./Car');

class Ferrari extends Car{

    construtor(){
        this.color = "Black"
        this.model = "458 Italia."
    }

    nitro(){
        super.nitro();
        this.velocity += 50;
        console.log("WATCH OUT! FULL SPEED, new velocity  is " + this.velocity);
    }

    stop(){
        super.stop();
        this.velocity = 0.2;
        console.log("BRAKE... new velocity is " +this.velocity);
    }
}

module.exports = Ferrari;
const Car = require('./Car');

class Beetle extends Car{
    
    construtor() {
        this.color = "BLUE"
        this.model = "Beetle 2014."
    }

    nitro() {
        super.nitro();
        this.velocity += 20;
        console.log("WATCH OUT! FULL SPEED, new velocity  is " + this.velocity);
    }

    stop() {
        super.stop();
        this.velocity = 10;
        console.log("BRAKE... new velocity is " + this.velocity);
    }
}

module.exports = Beetle;

class Animal{

    width = 0;
    weight = 0;

    eat(){
        this.weight += 1;
    }
    
    takeAqua(){
        console.log("Taking...")
    }
}

module.exports = Animal;
class Person{
    name = "";
    surname = "";
    age = 0;

    eat(){
        console.log("Eating..." + this.name);
    }
}

module.exports = Person;
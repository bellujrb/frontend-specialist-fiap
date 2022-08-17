import Person from "./Pessoa";

let person1 = new Person();
let person2 = new Person();

person1.name = "Joao";
person1.surname = "Belluzzo";
person1.age = 18;

person2.name = "Marcos";
person2.surname = "Silva";
person2.age = 20;

console.log("NOMES: ");
console.log(person1.name);
console.log(person2.name);


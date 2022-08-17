a = new Array();
b = new Array();

function check(){
a = ["Maca", "Pera", "Banana", "Abacaxi", "Melancia"];
b = ["Cacau", "Goiaba", "Melancia"];

c = a.concat(b);

c.push("1");
c.push("2");
c.shift(0);

console.log(c);

}

check();
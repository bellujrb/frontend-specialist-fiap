a = new Array();

a = ["Maca", "Pera", "Banana", "Abacaxi"];

const b = a.filter(element => {
    if (element[0].toLowerCase() == 'a'){
        return true;
    } else {
        return false;
    }
});

console.log(b);
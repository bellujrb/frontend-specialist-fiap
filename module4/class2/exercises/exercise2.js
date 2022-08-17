let array = new Array ();

array = [1,2,3,4,5]

for (let i = 0; i < array.length; i++){
    const element = array[i];
    console.log(array[i]);
}

const b = array.filter((element)=> {
    if (element < 3){
        return true
    } else {
        return false
    }
})

console.log(b);
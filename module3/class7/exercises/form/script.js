//pegar os elementos do html

const range = document.querySelector('#rangevalue');
const crate = document.querySelector('#crate');

crate.textContent= range.value;

//ONINPUT = Sempre que arrastar.

range.oninput = function(){
    crate.textContent = this.value;
}
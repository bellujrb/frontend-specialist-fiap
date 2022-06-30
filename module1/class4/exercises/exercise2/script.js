function dev(){
    
    quantity = parseInt(prompt("Enter the number of numbers"));

    for(i=0; i<quantity; i++){
        value = parseInt(prompt("Enter the value"));
        value += value;
    }
    media = value / quantity;

    alert(value);
    alert(media);

}
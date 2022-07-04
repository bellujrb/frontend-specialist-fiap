function dev(){
    quantity = prompt("Enter quantity numbers");
    value = 0;
    count = 1;
    sum = 0;

    while (count <= quantity){
        value = parseInt(prompt("Enter value "))
        sum += value;
        count++
    }

    alert("Number total is " + sum);
    media = sum / quantity;

    if (media > 30){
        alert("The mean is greater than 30");
    } else {
        alert("The mean is less than 30");
    }
}
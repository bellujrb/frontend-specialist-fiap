function dev(){

    value = parseInt(prompt("Enter quantity in numbers: "));
    count = 0;
    number = 0;
    sum = 0;

    smallerNumber = 0;

    while (count <= value){
        number = parseInt(prompt("Enter the number: "));
        sum = sum + number;

        if (smallerNumber < number){
            smallerNumber = number;
        }
        else if (smallerNumber > number){
            smallerNumber = number;
        }

        count++
    }

    alert(sum);
    alert("Small number is " + smallerNumber);
}
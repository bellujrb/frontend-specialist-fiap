function dev(){
    quantityEmployee = parseInt(prompt("Enter quantity employee "));
    count = 0;
    salaryTotal = 0;

    while(count < quantityEmployee){
        salaryEmployee = parseInt(prompt("Enter salary employee "));
        salaryTotal += salaryEmployee;
        count++;
    }

    count -= 1;

    for (i=count; i<quantityEmployee; i++){
        average = salaryTotal / quantityEmployee;
    }

    alert("Average total is " + average);

}
function dev(){

    salaryEmployee = 0;
    salaryTotal = 0;
    count = 0;

    while(count < 5){
        salaryEmployee = parseInt(prompt("Enter salary: "))
        salaryTotal += salaryEmployee;
        count++;
    }

    average = salaryTotal / 5;
    alert("Average total is " + average);

}
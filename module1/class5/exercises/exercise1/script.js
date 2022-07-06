function dev(){
    salaryTotal = 0;
    salary = 0;

    for (i=1; i<6; i++){
        salary = parseInt(prompt("Enter o " + i +" salary" ));
        salaryTotal += salary;
    }

    average = salaryTotal / 5;
    alert("Salary total is " + salaryTotal)
    alert("Average total is " + average)
}
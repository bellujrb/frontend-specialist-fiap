function dev(){
    salaryTotal = 0;
    salary = 0;

    for (i=1; i<6; i++){
        salary = parseInt(prompt("Enter o " + i +" salary" ));
        salaryTotal += salary;
    }

    average = salaryTotal / 5;
    
    if (average < 5000){
        alert("Review the salary of this professional");
    } else {
        alert("The average salary for this employee is correct.");
    }
}
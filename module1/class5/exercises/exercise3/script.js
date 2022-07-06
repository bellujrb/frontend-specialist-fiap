function dev(){
    quantityEmployees = parseInt(prompt("Enter quantity employees: "));
    salaryTotal = 0;
    salary = 0;

    for (i=0; i<quantityEmployees; i++){
        salary = parseInt(prompt("Enter salary: " ));
        salaryTotal += salary;
    }

    average = salaryTotal / quantityEmployees;
    alert("The average salary is " + average);
}
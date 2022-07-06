function dev(){
    quantityEmployees = parseInt(prompt("Enter quantity employees: "));
    recebySalary = 0;
    totalSalary = 0;
    count = 0;

    while (count < quantityEmployees){
        recebySalary = parseInt(prompt("Enter salary: "));
        totalSalary += recebySalary;
        count++
    }

    average = totalSalary / quantityEmployees;

    alert("Average is " + average);
}
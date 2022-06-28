function dev(){
    
    value = parseInt(prompt("Enter value start"));
    valueLast = parseInt(prompt("Enter value last"));
    
    while (value <= valueLast){
        document.write("The value of the typed variable is " + value + "<br>");
        value ++;
    }

    document.write("THE VALUE LAST IS " + value);
}

function dev2(){
    age = parseInt(prompt("Age in username"));

    if (age >= 18){
        document.write("you is Bigger in Age with")
    } else {
        while (age < 18){
            age++
            document.write("user's current age increments to " + age + "<br>");
        }
    }
}
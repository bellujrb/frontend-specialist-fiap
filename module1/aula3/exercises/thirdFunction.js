function dev(){
    
    value = parseInt(prompt("Enter value start"));
    valueLast = parseInt(prompt("Enter value last"));
    
    while (value <= valueLast){
        document.write("The value of the typed variable is " + value + "<br>");
        value ++;
    }

    document.write("THE VALUE LAST IS " + value);
}
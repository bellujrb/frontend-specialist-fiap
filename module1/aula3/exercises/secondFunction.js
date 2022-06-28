function dev(){
    name = prompt("Enter name: ");
    father = prompt("Enter name father");

    ageName = parseInt(prompt("Enter age: "));
    ageFather = parseInt(prompt("Enter age father: "));

    sumAge = ageName + ageFather;

    if (sumAge >= 70){
        alert("Your father is probably over 70 years");
    } else {
        alert("Your father not have 70 years.");
    }
}
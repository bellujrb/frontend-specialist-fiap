function dev(){
    var name = prompt("Enter your name: ");
    var nameFriend = prompt("Enter name friend: ")
    var age = parseInt(prompt("Enter your age: "));
    var ageFriend = parseInt(prompt("Enter your age: "));

    if (age > ageFriend){
        alert(name + ", it's older!!!");
    } else {
        alert(nameFriend + ", it's older!!");
    }

}
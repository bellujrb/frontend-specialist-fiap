function dev(){

    agePlayer = parseInt(prompt("Enter age Player: "));

    if (agePlayer >= 18){
        alert("Player PRO")
    } else if (agePlayer >= 15){
        alert("Player SEMIPRO")
    } else if (agePlayer >= 12){
        alert("Player ASPIRANT")
    } else if (agePlayer < 12){
        alert("Baby Tooth")
    }
}
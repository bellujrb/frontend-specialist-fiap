function dev(){

    agePlayer = parseInt(prompt("Enter age Player: "));

    if (agePlayer >= 18){
        alert("Player PRO")
    } else if ((agePlayer >= 15) && (agePlayer < 18)){
        alert("Player SEMIPRO")
    } else if ((agePlayer >= 12) && (agePlayer < 15)){
        alert("Player ASPIRANT")
    } else {
        alert("Baby Tooth")
    }
}
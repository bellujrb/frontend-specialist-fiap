function dev(){
    number = parseInt(prompt("Enter quantiy in numbers: "));
    count = 1;
    sum = 0;
    media = 0;
    
    recibyNumber = 0;

    while(count <= number){
        recebyNumber = parseInt(prompt("Enter the [" + count + "] number "));
        sum = sum + recebyNumber;
        count++;
    }
    media = sum / number;
    document.write("MEDIA IS " + media);
}
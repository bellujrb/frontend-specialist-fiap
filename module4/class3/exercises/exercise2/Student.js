class Student {
    #name = ""
    id = 0;
    #grade = []

    constructor (name, id) {  
        this.#name = name;
        this.id = id;
    }

    grade (grade) {
        if(grade < 0){
            grade = 0;
        } 
        this.#grade.push(grade)        
    }

    calcMedia (){
        let sum = 0
        this.#grade.forEach(element => {
            sum += element
        });
        return sum / this.#grade.length;
    }

    verifyGrade () {
        let media = this.calcMedia()

        if (media > 10){
            media = 10;
        }

        if (media >= 7) {
            console.log(this.#name + " was successfully approved " + media);
        } else {
            console.log(this.#name + "  was not approved " + media);
        }
    }
}


module.exports = Student;
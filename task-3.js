/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/




function GradeCalculator(mark){
    if(typeof mark != 'number'){
        return 'give me number';
    }else{
        if(mark >= 90){
            return "A"
        }else if(mark >= 80){
            return "B"
        }
        else if(mark >= 70){
            return "C"
        }else if(mark > 60){
            return "D"
        }else{
            return "F"
        }
    }
}

console.log(GradeCalculator(59));
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/



function BMICalculates(weight, height){
    if(typeof weight != "number" || typeof height != "number"){
        return "give me number";
    }else{
        const BMI = parseFloat(( weight / height ** 2).toFixed(2));
        console.log(BMI);
        if(BMI < 18.5){
            return 'underweight'
        }else if(BMI >= 18.5 && BMI <=24.9){
            return 'normal'
        }else if(BMI >=25 && BMI <= 29.9){
            return 'overweight'
        }
        else{
            return 'you are obese'
        }
    }
}

console.log(BMICalculates(100, 1.7018));
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


function doubleNumber(num1, num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        return "give me number"
    }else{
        // if(num1 > num2){
        //     return num1 * 2
        // }else{
        //     return num1 + num2;
        // }


        // simple ternary

        num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);


    }
}

doubleNumber(1, 8);
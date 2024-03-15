/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


function ticketCalculator(age, price, isStudent){
    if(typeof age != "number" || typeof price != 'number' || typeof isStudent != "boolean"){
        return "give me current input";
    }else{
        if(age < 10){
            return "ticket free"
        }else if(isStudent === true){
            // 50% discount
            const discount = price * 50 / 100;
            const payAmount = price - discount;
            return payAmount;
        }else if(age >= 60){
            // 15% discount
            const discount = price * 15 / 100;
            const payAmount = price - discount;
            return payAmount;
        }else{
            return price;
        }
    }
}

console.log(ticketCalculator(5, 800, isStudent = true));
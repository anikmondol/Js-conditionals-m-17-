/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


function freeDrinks(price){

    if(typeof price != "number"){
        return 'give number'
    }else{
        if(price >= 500){
            return 'you win a free drinks';
        }else{
            return price + 30;
        }
    }

}


console.log(freeDrinks(50));
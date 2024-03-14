/**
 * MULTI_LEVEL CONDITION
 * */ 



const price = 2000;


if(price >= 5000){

    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

}else if(price >= 3000){
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else{
    console.log(price);
}
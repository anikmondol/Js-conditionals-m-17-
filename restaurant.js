const age = 50;
const price = 500;

if(age < 12){
    console.log('you can free eat');
}else if(age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount
    console.log(payAmount);
}else if(age >= 50){
    //  25% discount 
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}
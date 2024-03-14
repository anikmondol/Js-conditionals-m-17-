/**
 * TERNARY----> THREE PARTS
 * 
 * condition ? true : false;
 * 
 * 
 * **/


const age = 18;

// normal if-else

// if(age >= 18){
//     console.log('you can vote');
// }else{
//     console.log('bari teay jeay gum paro ga');
// }


// normal if-else
// age >= 18 ?  console.log('you can vote') : console.log('bari teay jeay gum paro ga');




// let price = 500;

// const isLeader = true;


// if(isLeader === true){
//     price = 0;
// }else{
//     price += 100;
// }

// console.log(price);


// price = isLeader === true ? 0 : price += 100;

// console.log(price);


// optional 



let price = 100;

const isLeader = true;

// if (isLeader === true) {
//     if (price >= 1000) {
//         price /= 2;
//     } else {
//         price = 0
//     }
// } else {
//     price += 100;
// }

// console.log(price);



price = isLeader === true ? price >= 1000 ? price /= 2 : 0 : price += 100;

console.log(price);
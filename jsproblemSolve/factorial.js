// 5! =1*2*3*4*5*6

// function factorial(num){
//     var fact = 1;
//     for(var i = 1; i <= num; i++){
//          fact = fact * i;
//          console.log(i,fact)
    
//     }
//     return fact;
// }
// var result = factorial(5);
// console.log(result);

// factorialRecursive
function factorialRecursive(num){
    if(num == 1){
        return 1;
    }
    else{
        return num* factorialRecursive(num - 1);
    }
    return factorialRecursive;
}

var result  = factorialRecursive(5);
console.log(result);
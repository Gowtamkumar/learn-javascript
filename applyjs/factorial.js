// Calculatin Factorial
// 3! = 1x2x3x
// 4! = 1x2x3x4x
// 5! = 1x2x3x4x5x
// 10! =1*2*3*4*5*6*7*8*9*10
function FactorialFun(x){
    var factorial = 1;
    for(var i =1; i<=x; i++){
        factorial = factorial * i
        
    }
    return factorial;
}
var FactorialResult = FactorialFun(10);
console.log(FactorialResult);
// Calculatin Factorial
// 3! = 1x2x3x
// 4! = 1x2x3x4x
// 5! = 1x2x3x4x5x
// 6! =1*2*3*4*5*6
// 7! =(7-1)!*7
// 8! =(8-1)!*8
// 9! =(9-1)!*9
// 10! =(10-1)!*10
// n! =(n-1)!*n

function factorialRecursive(n){
    
if(n==0){
    return 1;
}else{
    return factorialRecursive(n-1) * n;
}
    
}

var factorialRecursiveResult = factorialRecursive(10);
console.log(factorialRecursiveResult);
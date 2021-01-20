// Calculatin Factorial
// 3! = 1x2x3x
// 4! = 1x2x3x4x
// 5! = 1x2x3x4x5x
// 10! =1*2*3*4*5*6*7*8*9*10
function factorialW(n){
        var i = 1;
        var factorial = 1;
        while(i<=n){
            i++
            factorial = factorial * i;
            
        }
        return factorial;
    }
    var FactorialResult = factorialW(10)
    console.log(FactorialResult);
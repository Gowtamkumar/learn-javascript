function checkPrimeNum(n){
    for(i = 2; i<n; i++){
        if(n%i == 0){
            return "This number is not prime number";

        }
        
    }
    return "Your number is a Prime Number";
}
var PrimeNumberCheckResult = checkPrimeNum(11);
console.log(PrimeNumberCheckResult);
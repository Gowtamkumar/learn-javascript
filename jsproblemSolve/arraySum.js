// var numbers = [39,94,38,45,09,45,56,38,27]
// var sum = 0;
// for(var i = 0; i <numbers.length; i++){
//     var element = numbers[i]
//     var sum  = sum + element;
// }
// console.log(sum);

function getArrySum(num){
    var sum = 0;
    for(var i = 0; i <num.length; i++){
        var element = num[i]
        var sum  = sum + element;
        // var Modulas = sum / 2;
    }
    
    return sum;
}
var otherInput = getArrySum([20,30,40,30]);
console.log(otherInput);

var numbers = [39,94,38,45];
var getArrySumResult =getArrySum(numbers);
console.log(getArrySumResult);


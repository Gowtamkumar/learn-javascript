var number = [2,4,5,6,7,2,3,4,8,9,8,5,4,];
var uniqueNumber = [];
for(var i = 0; i<number.length; i++){
    var element = number[i];
    var index  = uniqueNumber.indexOf(element);
    if(index == -1){
        uniqueNumber.push(element);
    }
}
console.log(uniqueNumber);

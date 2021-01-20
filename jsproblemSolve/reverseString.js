function ReverceSting(arr){
    var reverse = "";
    for(var i =0; i<arr.length; i++){
        var char = arr[i];
        var reverse  = char + reverse;
        
    }
    return reverse;
}

var text  = "hello World. I am Learing Javascript";
var reverseStingResutlt = ReverceSting(text);
console.log(reverseStingResutlt);
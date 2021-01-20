var marks = [45,81,40,90,69,50,74,23];
var min = marks[1];
for(var i = 0; i<marks.length; i++){
    var result = marks[i]
    if(result<min){
        min = result;
    }
}
console.log(min);
var speech  = "I love you sonu";
var count = 0;
for(var i = 0; i<speech.length; i++){
    var chr = speech[i];
    if(chr == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);

var business = 505;
var minister = 1706;
var sochib = 1050;



var max = Math.max(business,minister,sochib);
console.log(max);

if(business > minister){
    if(business> sochib){
        console.log("business Man is Bigger");
    }else{
        console.log("Sochib Man is Bigger");
    }
}else{
    if(minister>sochib){
        console.log("Minister is bigger");
    }else{
        console.log("Sochib Man is Bigger");
    }
}
 
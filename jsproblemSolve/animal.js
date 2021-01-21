// Forest km travaling animal count
/**
 *  if you goo 1 - 10 km then you find per km 50 animal.and if you go 11 - 20 km 
    then you find per km 100 animal and if you go 20 + km 
    then you find km 300 animal.so show calculation
 */

function AnimalCount(depth) {
    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
        console.log(animal);
    }
    else if (depth <= 20) {
        var first10Km = 10 * 50;
        var remaining = depth - 10;
        var Second10To20Km = remaining * 100;
        var animal1Total20Km = first10Km + Second10To20Km;
        // console.log(animal1Total20Km);
        var animal = animal1Total20Km;
    } else {
        var first10Km = 10 * 50;
        var Second10To20Km = 10 * 100;
        var remaining = depth - 20;
        var Thirth20PlusKm = remaining * 300;
        var thirthTotal20PlusKmResult = first10Km + Second10To20Km + Thirth20PlusKm;
        // console.log(thirthTotal20PlusKmResult);
        var animal = thirthTotal20PlusKmResult;
        
    }
    return animal;
}
var result = AnimalCount(22);

console.log("Total Animal: ", result);
// function IsLeeYears(Year){
   
//     const remainder = Year % 4;

//     if(remainder==0){
//         return true;
//     } else{
//         return false;
//     }
// }
//  const ResultLeepYears = IsLeeYears(1587);
//  console.log(ResultLeepYears);

function leapYear(year)
{
    const FirstCalY = year % 4;
    const SecondCalY = year % 100;
    const ThirdCalY  = year % 400;
    if(FirstCalY == 0 && SecondCalY != 0 || ThirdCalY == 0){
        return true;
    }
    else{
        return false;
    }
}
 const resLeapyer =  leapYear(2020);
 console.log(resLeapyer);



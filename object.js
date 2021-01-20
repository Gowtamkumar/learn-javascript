var student = {id:105, phone:444, name:"gowtam"}
// object value update
student.phone = 1010; // object value update first waya
student["phone"] = 9999;// object value update second waya
var thirdwayphoneupdate = "phone"
student[thirdwayphoneupdate] = 3333;// object value update third waya

var phonenum = student.phone //object first declear waya
var phonenum1 =student["phone"];//object second declear waya
var callphone = "phone";
var phonenum2 = student[callphone];//object third declear waya
// new valu add in object
student.polyjanu = "POly riani";
student["Baba"] = "Dulal chandra";
console.log(phonenum);
console.log(phonenum1);
console.log(phonenum2);
console.log(student);

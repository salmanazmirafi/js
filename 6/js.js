// Array======================================
//const student1 = ["Reyhan",'Albi',"Salman","Arjun","Ayman"];
//const student2 = [13,34,54,6,45,677,567,8,9,5,4];
//const student3 = [true, false, true, false];
//const student4 = ["Reyhan",['Albi',['azmi', "Rafi"],"Salman"],"Arjun","Ayman"];
//
//
//console.log(student1)
//console.log(student2)
//console.log(student3)
//console.log(student4)

//for(let i = 0; i< 5; i++){
//console.log(student1[i])
//}


// Function======================================
function nameOfFunction(name){
if(!name){
console.log("Please Provide Your Name")
}else{
console.log("Hello!", name)
}

}
nameOfFunction("Salman")
nameOfFunction("Abdullah")
nameOfFunction("Sony")
nameOfFunction("Someday")

function grantor(max){
const grantorNumber = Math.floor(Math.random()* max)
return grantorNumber
}
console.log(grantor(500))

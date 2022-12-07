const myFunc = function(){
    console.log('Function');
}
myFunc()

// 
function a (){
    const b = function(){
        console.log("Dobul Function");
    }
    b()
}
a()

// 
function add(a){
    return a + multfly(10)
}
function multfly(b){
    const c =20
    return c * b
}
const data = add(50)

console.log(data);

//

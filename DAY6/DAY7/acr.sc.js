//other Example

function printName(){
    console.log("sakshi")
}
printName();
console.log("Welcome");

function printName(){
    setTimeout(()=>{
        console.log("sakshi");
    },2000);
}
printName();

console.log("welcome");
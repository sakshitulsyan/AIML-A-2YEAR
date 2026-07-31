console.log("====Variable====");
var text ="something";
console.log(text);
console.log("\n==== If Else ====");
var a=40;
var b=30;
if(a>b){
    console.log("a is greater, value of  a= " +a);
}
else{
    console.log("b is greater than a");
}
console.log("\n==== Function =====");
function abes (){

}
console.log("\n====Function with parameter ====");
function greet(fname,lname){
    console.log("hello",fname,lname);
}
greet("Kartik","Tulsyan");
greet("Sakshi","Tulsyan");
console.log (" \n ==== Function Return====");
function add (x,y){
    return x+y;

}
var result = add (10,20);
console.log ("The sum is "+result);
console.log("\n====Default Argument ====");
function fullName(fname ="ABES",lname="enginnering college"){
    return fname+ " " +lname;
}
console.log(fullName());
console.log(fullName("Kartik","Tulsyan"));

console.log("\n====percentage====");
function totalMark(math,english,science){
    return math+english+science;
}
function percentage(total){
    return(total/300)*100;
}
var total = totalMark(80,75,90);
console.log("total mark=" +total);
console.log("percentage=" +percentage(total)+"%");


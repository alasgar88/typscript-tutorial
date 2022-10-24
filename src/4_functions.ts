// function addNumber(n1:number,n2:number):number{...}

function addNumber(n1:number,n2:number){
    return n1 + n2
}

// :void -  typescript knows that funtion does not have any return statement
// if you would use :undefined instead of void below you must use return; (typescript would excpect you have return statement where  you just  don't return a value)
function printResult1(num:number):void{
    // tecni
    console.log('Result: ' + num);   
}

printResult1(addNumber(5,12))

// 
let combineValues: Function
combineValues = printResult1

// creating function type
// combinedValues should accept any function that does not have any paramets and return a number
// let combinedValues:()=> number;

// combinedValues should accept any function that takes 2 parametrs, where each parametr is number,and returs a number
let combinedValues:(a:number,b:number)=> number;


function addAndHandle(n1:number,n2:number,cb:(num:number)=> void){
    const result = n1 + n2;
    cb(result)
}

const a = addAndHandle(10,20,(result)=>{
    console.log(result);
})

console.log(a);

// Function type assigned to the constant
const printOutput1:(a:number|string)=> void = output => console.log(output);


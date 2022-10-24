// **** var let const *** //

// for var -- only global and function scope
// let and const -- global and  block scoped

let result1
function add3(a:number,b:number){
    // let result1
    result1 = a + b
    return result1
}

console.log(result1);

// will give error in typescript but in javascript it is okey

// let age = 29
// if(age > 20){
//     var isOld = true
// }
// console.log(isOld);



// ** Arrow Function ** 

// default parameters must be last at the list
const addNumbers = (a:number,b:number = 2) => a + b;

// const printOutput = (output: string | number)=> console.log(output);

const printOutput:(output:number | string)=> void = output => console.log(output);

printOutput(addNumbers(5));
              
// typescript knows which type of data event listener will provide to us  (event object)

const button1 = document.querySelector('button');

if(button1){
    button1.addEventListener('click',event => console.log(event))
}


// ** Spread (split into single item and COPY them) / function parameters while runing function **

const hobbies = ['Sports','Cooking']
const activeHobbies = ['Hiking',...hobbies]
console.log(activeHobbies);

const person10 = {
    name:'Max',
    age:30
}

const copiedPerson = {...person10}

//  Rest Operator (destructoring/ function parameters while creating/declaration) ** //

// example with tuple
// const addRest = (...numbers:[number,number,number])=> {}
const addRest = (...numbers:number[])=> {
    console.log(numbers,"numbers");
    
}

addRest(1,2,3,4,5,6)


// *** Array & Object destructuring *** //




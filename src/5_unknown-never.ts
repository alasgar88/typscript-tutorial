//  unknown
// let username
let userInput:unknown;
let userName:string;
userInput = 5;
userInput = "Max";
// if we set 'unknown" type as "any" uncommenting code below will not give an error
// userName = userInput

// additional type check
if(typeof userInput === "string"){
    userName = userInput
}

// never - this function returns never
function generateError(message:string,code:number):never{
    throw {message:message,errorCode:code}
    // while(true){}; function within infinite loop (2.18:44)
}

const result = generateError("An error ocured",5000)
console.log(result);


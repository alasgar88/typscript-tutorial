function add(n1:number,n2:number,showResult:boolean,phrase:string){
    const result = n1 + n2 
    if(showResult){
        console.log(phrase + result);
    }else{
        return result
    }
}
// not a good practice
// let number1:number = 5;
let number1= 5;
const number2 = 2.8;
let printResult = true;
// will give error
// printResult = 5
const resultPhrase = 'Result is: '


add(number1,number2,printResult,resultPhrase)




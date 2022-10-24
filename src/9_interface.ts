// interface with objects
// descripbe structure of an object
// you can't add public or private ,but can add readonly

interface Named {
    // this property doest not have to exist in class or object
    name?:string;
    outputName?:string;
}

// extending interfaces
interface Greetable extends Named {
    age:number;
    // greet(phrase:string):void;
    greet:(phrase:string)=>void
}

let user1:Greetable;

user1 = {name:'Max',age:30,greet(phrase:string){
    console.log(phrase + ' ' + this.name);
}}

user1.greet("Hi there - I am ")


// interfaces with Classes
class Person implements Greetable{
    // optional parametr in class
    name?:string;
    age:number;
    constructor(age:number,name?:string){
        if(name){
            this.name = name
        }
        this.age = age
    }
    
    greet(phrase: string): void {   
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else{
            console.log('Hi');
            
        }
    }
    
}

// optinal parameter
const user3 = new Person(30)

// readonly
let user2:Greetable
user2 = new Person(30,'Alasgar')

// the code below must not work due to readonly on Greeting interface if we write readonly in front of name property in "Named" interface
// user2.name = "Alik"


// interfaces as function types
// type AddFn = (a:number,b:number)=>number
// alternative syntax to custom type above
interface AddFn {
    (a:number,b:number):number
}


let add1: AddFn;

add1 = (n1:number,n2:number) =>{
    return n1 + n2
}


// Optional Parameters & Properties







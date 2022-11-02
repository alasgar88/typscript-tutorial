// Typeguards just term that describe the idea or approach of checking if certain property or method exists before you try to use it or if you can do something with type before you try to use it

type Admin = {
    name:string;
    priviliges:string[];
};

type Employee =  {
    name:string;
    startDate:Date;
}

// intersections (with object types)
// interface ElevatorEmployee extends Admin,Employee {} 
type ElevatorEmployee = Admin & Employee

const e1:ElevatorEmployee = {
    name:'Max',
    priviliges:['create-server'],
    startDate: new Date()
}


// intersections (with union types)
type Combinable1 = string | number

type Numeric = number | boolean

type Universal = Combinable & Numeric 


// Type Guards (type guard help us with union types)
function add5(a10:Combinable1,b10:Combinable1){
    if(typeof a10 === 'string' || typeof b10 === 'string'){
        return a10.toString() + b10.toString();
    }
    return a10 + b10
}


type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp:UnknownEmployee){
    console.log('Name' + emp.name);

    if('priviliges' in emp){
        console.log('Priviliges:' + emp.priviliges)
    }   

    if('startDate' in emp){
        console.log('Priviliges:' + emp.startDate);
    }

}

printEmployeeInformation({name:'Manu',startDate:new Date()})



class Car {
    drive(){
        console.log('Driving...');   
    }
}

class Truck {
    drive(){
        console.log('Driving a truck');
    }
    loadCargo(amount:number){
        console.log('Loading cargo...' + amount);      
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

// check this
console.log(typeof v1);
console.log(v1 instanceof Car);



function useVehicle(vehicle:Vehicle){
    vehicle.drive()
    if(vehicle instanceof Truck){
        vehicle.loadCargo(5)
    }
}


useVehicle(v1)
useVehicle(v2)


//  ***  discriminated unions ***  //
//  This is discriminated union because we have one common property in every object that makes up our union,which describes that object so that we can use this property that describes this object in our check to have 100% type safety and understand which properties are available for such an object and which properties are not

interface Bird {
    type:'bird'
    flyingSpeed:number;
}

interface Horse {
    type:'horse'
    runningSpeed:number;
}

type Animal = Bird | Horse


function moveAnimal(animal:Animal){
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }
    console.log('Moving at speed' + speed);
    
}

moveAnimal({type:'bird',flyingSpeed:60})



// ** TypeCasting ** //

// const userInputElement = <HTMLInputElement>document.getElementById('user-input');

// this now tells typescript that the expression in front of  'as HTMLInputElement" will yield a value with type of 'HTMLInputElement'

// alternative code
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;

// If you not sure userInputElement will not return null.By cheking if object exists or not we don't need to use '!'
const userInputElement = document.getElementById('user-input')
if(userInputElement){
    (userInputElement as HTMLInputElement).value = 'Hi there!';
} 



// *** Index Properties *** //

interface ErrorContainer {
    // we dont know - which property names we will use and how many properties will we have
    // property name must be string - property value must be string
    id:string;  // id:number will give error
    [prop:string]:string
}

const errorBag:ErrorContainer = {
    id:'1',
    email:'Not a valied email!'
}



// *** Function Overloads *** //
// Typescript will not be able to correctly infer the return type on its own.

type Combinable10 = string | number

function add50(a10:number,b10:number):number
function add50(a10:string,b10:string):string
function add50(a10:number,b10:string):string
function add50(a10:string,b10:number):string
function add50(a10:Combinable10,b10:Combinable10){
    if(typeof a10 === 'string' || typeof b10 === 'string' ){
        return a10.toString() + b10.toString();
    }
        return a10 + b10
}

const result50 = add50('Alasgar','Mahmudov')
console.log(result50);
result50.split('')
const result55 = add50(5,15)
console.log(result50);



// *** Optional Chaining *** //
const fetchedUserData = {
    id:'id',
    name:'Max',
    // job:{
    //     title:'CEO',
    //     description:'My own company'
    // }
}

// If data will fetch from sourse where typscript can't look in to
// console.log(fetchedUserData?.job?.title);



// *** Nullish Coalescing *** //

const userInput10 = ""; // undefined,''

const storedData = userInput10 || 'DEFAULT'
console.log(storedData);

// But if you want to keep that user input or whatever data you're working with,unless it really is null or undefined,then you need another approach
const storedData10 = userInput10 ?? 'DEFAULT'
console.log(storedData10,"Nullish Coalescing");



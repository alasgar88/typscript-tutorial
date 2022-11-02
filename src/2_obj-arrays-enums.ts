// not good practice 

// const person: {
//     name:string;
//     age:number;
// } = {
//     name:'Maximilian',
//     age:30
// }

// enum type
// will asign labels to values
enum Role {ADMIN,READ_ONLY,AUTHOR}

console.log(Role.READ_ONLY);

const person:{
    name:string;
    age:number;
    hobbies:string[],
    // i want special array (tuple) with two elements with first number type, second string type element
    role:[number,string],// (number | string)][] if we want array instead of tuple
    // role:number
} = {
    name:"Maximilian",
    age:30,
    hobbies:['Sports','Cooking'],                                
    role:[2,'author'],            
    // role:Role.ADMIN
};

// will give error
// person.role[1] = 10

// empty array not allowed
// person.role = []

// allowed on tuples
person.role.push('admin')
// can equal to array with the same structure 
// will give error
// person.role = [0,'admin','user']

let favoriteActivities:string[];  // any[]
favoriteActivities = ['Sports']

console.log(person);
// 2 types being combined
// will give error
// const names10:Array = []

// Generic type is a type which is kind of connected with some other type and is really flexible regarding which exact type other type is

// by setting this to type any array,it's better than not specifying anything
let names20:any[] = ["Max", "Manuel"];

let names30:Array<string | number> = ["Max", "Manuel"]; // equals (string | number)[]


// 
const promise:Promise<any> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('This is done!')
        resolve(5)

    },2000)
})

promise.then(data => {
    // as we write Promise<any> in our Geneceric type TypeScript has no information about the data this promise will eventually yield.That is why Typescript can't see error ---  "calling split method on number" 
    data.split('a')
})


// * intersection of 2 unknown objects is just a new unknown object which doesn't offer any additional type information to TypeScript 

function merge(objA:object,objB:object){
    return Object.assign(objA,objB)
}

// solution with Typecasting
const mergedObj = merge({name:'MAX'},{age:30}) as {name:string,age:number}
mergedObj.name

// We turn this into a generic function by adding these angle brackets after the function name and then we define Q identifiers
// With  Generic types we're telling TypeScript is that these two parameters can and often will be of different types.And then Typescript understands that we will get different type data and that this function will overall return the intersection of that data.And therefore,TypeScript is able to undestand what we store in here in mergedObj1 
function merge1<T extends object,U>(objA:T,objB: U){
    return Object.assign(objA,objB)

}

// These types are not set in stone when we define this function,but they are set dynamically when we call function
const mergedObj1 = merge1({name:'alasgar'},{age:30})
console.log(mergedObj1.name,"mergedObj1");


// You can also specifically tell TypeScript which types it should fill .That is how generics work behind the scenes
const mergedObj2 = merge1<{name:string},{age:number}>({name:'Ramin'},{age:28})


// *** working with constraints *** //
function merge2<T extends object,U extends object>(objA: T,objB: U){
    return Object.assign(objA,objB)
}


// Another Generic Function
interface Lengthy {
    length:number
}

function countAndDescribe<T extends Lengthy>(element:T):[T,string]{
    let descriptionText = 'Got no value.'
    if(element.length === 1){
        descriptionText = 'Got 1 element.'
    }else if (element.length > 1){
        descriptionText = 'Got' + element.length + 'elements.'
    }
    return [element,descriptionText]; 
}

console.log(countAndDescribe('Hi There!'),"countAndDescribe");


// The "keyof" Constraint
function extractAndCover<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key]
}

extractAndCover({age:20,name:"Ramin"},'name')


// Generic Classes
class DataStorage<T>{
    private data:T[] = []

    addItem(item:T){
        this.data.push(item)
    }  
    removeItem(item:T){
        // if(this.data.indexOf(item) === -1){
        //     return;
        // }
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        console.log(this.data);  
        return [...this.data]
    }
}


// this data storage will store only string
const textStorage = new DataStorage<string>()
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Manu')
textStorage.getItems();

const numberStorage = new DataStorage<number>()
numberStorage.addItem(5)

const objectStorage =  new DataStorage<object>()
objectStorage.addItem({name:'Alasgar',age:30})
objectStorage.addItem({name:'Ramin',age:28})
objectStorage.getItems()
// object that we want to remove {name:'Alasgar',age:30} is brand new object with different address on memory.And as indexOf cant find this object it removes the last element in array
objectStorage.removeItem({name:'Alasgar',age:30})
objectStorage.getItems()

// => will work in a such way
const myNewObj = {name:'Rauf',age:30}
objectStorage.addItem(myNewObj)
objectStorage.getItems()
objectStorage.removeItem(myNewObj)
objectStorage.getItems()


// Generic Utility Types
interface CourseGoal {
    title:string;
    description:string;
    compleUntil:Date;
}

function createCourseGoal(
    title:string,description:string,date:Date
    ):CourseGoal{
    // Now what this does is tels TypeScript that this is an object which in the end will be a course goal.But initially partial kind of wraps our own type and changes it to a type where all these properties are optional
    let courseGoal:Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.compleUntil = date;
    return courseGoal as CourseGoal
}

// Readonly
const names:Readonly<string[]> = ['Max','Sports']
// will give error
// names.push('Manu')


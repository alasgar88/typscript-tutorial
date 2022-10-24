class Department {
    // static property
    static fiscalYear = 2020;
    // cant acces outside of function / and will not accecable in inherited Classes
    // private name:string
    // should not change after initializasion
    // private readonly id:string
    protected employees:string[] = [];
    
    constructor(private readonly id:string, public name:string){
        // this.name = name;
        // this.id = id;        
    }

    // static method
    static createEmployee(name:string){
        return {name:name}
    }

    describe(this:Department){
        // you can't acces static properties from none static part of your class

        // For accesing static properties from none static part use ClassName.method_name | property_name
        //  console.log(Department.fiscalYear);
        console.log('Department' + " " + this.name);
    }

    // abstract describe(this:Department):void

    addEmployee(employee:string){
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);   
    }
}


// create employee
const employee = Department.createEmployee('Max')
console.log(employee,"employee",Department.fiscalYear,"fiscalYear");


// 
const accounting = new Department("id1","Accounting")

console.log(accounting,"Accounting+test");
accounting.describe()

// (this keyword)
// const accountCopy = {name:"finance",describe : accounting.describe}
// accountCopy.describe()


// **  Private && Public Access Modifier *** //
// you should not allow to acces employee outside of class
// accounting.employees[2] = 'Anna'

accounting.addEmployee('Max')
accounting.addEmployee('Menu')
accounting.printEmployeeInformation()




// *** Inheritance *** //
// 1
class ITDepartment extends Department{
    // we dont need commented code below as we have shortcut public in front of admins in constructor parametrs
    // admins:string[]
    constructor(id:string, public admins:string[]){
        // super here calls the constructor of the base class
        super(id,'IT');
        // this.admins = admins
    }
}

const it = new ITDepartment('id3',['Ramin','Alasgar'])
console.log(it,"it");


// 2
class AccountingDepartment extends Department{
    private lastReport:string

    constructor(id:string,private reports:string[]) {
        super(id,'Accounting')
        this.lastReport = reports[0]
    }

    // getter method has to return something
    get mostRecentReport(){
        if(this.lastReport){
            console.log(this.lastReport);  
            return this.lastReport
        }
        throw new Error('No report found.')
    } 

    // setter
    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value ')
        }
        this.addReport(value)
    }

    addReport(text:string){
        this.reports.push(text)
        this.lastReport = text
    }
    printReports(){
        console.log(this.reports);
    }
    // addEmployee(name:string){
    //     if(name === "Max"){
    //         return;
    //     }
    //     // private properties only accestable inside the class that there are defined .We cant acces them from class that inherites from that class.For this purpose we must use protected instead of private class
    //     this.employees.push(name)
    // }

    // re create describe function in AccountingDepartment class
    // describe(): void {
    //     console.log("Alasgar");
           
    // }
}


// *** Getters & Setters *** //

const accounting10 = new AccountingDepartment('id2',[])
console.log(accounting10,"accounting10");
console.log(accounting10.describe());

// Get we must run getter method as property
accounting10.addReport('Something went wrong...')
accounting10.mostRecentReport
// Setter
accounting10.mostRecentReport = "Year end report"
accounting10.mostRecentReport


// ***    *** //
// Static method
// Abstract Classes
// Private Constructors (Singletons)
// Singletons patter is about ensuaring  you always have exactly one instance of a certain class.For that we use private constructor

class Book {
    private static instance:Book

    private constructor(public name:string,public year:number,public author:string){}

    static getInstance(name:string,year:number,author:string){
        if(this.instance){
            return this.instance
        }
        this.instance = new Book(name,year,author)
        return this.instance
    } 
}

// can't do this with private constructor
// const newBook = new Book('My Book',2022,'Alasgar')

const bookUniqueInstance = Book.getInstance('Garry Poter',2016,'O')
console.log(bookUniqueInstance,"bookUniqueInstance");






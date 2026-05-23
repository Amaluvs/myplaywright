//0.class+getter+constructor+property
class classsample
{
    id=100
    get location()
    {
        return 'tvm'
    }
    constructor(firstname,lastname)
{
this.firstname=firstname
this.lastname=lastname
}
fullname()
    {
console.log(this.firstname+this.lastname)
    }

}
let obj=new classsample("anu","sinu")
obj.fullname()
console.log(obj.location)
console.log(obj.id)
console.log("**************************************************")
//1.
class Student0 {
    name = "meenu"

    
}

let obj0 = new Student0()
console.log(obj0.name)
//console.log(Student0.name) not possible
console.log("**************************************************")

//2.Basic class(simple property+class)
class Student1 {
    name = "Anu"

    display() {
        console.log(this.name)
    }
}

let obj1 = new Student1()
obj1.display()
console.log("**************************************************")
//3.cllass+constructor
class Student2 {
    constructor(name) {
        this.name = name
    }

    display() {
        console.log(this.name)
    }
}

let obj2 = new Student2("Sinu.....")

 //obj2 = new Student2("manu.")
let obj8 = new Student2("varun")
obj2.display()
obj8.display()
console.log("**************************************************")
//4.multiple properties
class Student3 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    display() {
        console.log(this.name, this.age)
    }
}

let obj3 = new Student3("seenu", 22)
obj3.display()
console.log("**************************************************")
//5.Getter Method-No brackets → because of get(calling)
class Student4 {
    get college() {
        return "ABC College"
    }
}

let obj4 = new Student4()
console.log(obj4.college)
console.log("*********************************")
//6-setter
class Student9 {
    set name(value) {
        this._name = value
    }

    get name() {
        return this._name
    }
}

let obj9 = new Student9()
obj9.name = "Anu"
console.log(obj9.name)
console.log("*********************************")
/*6class Student {
    constructor(name) {
        this.name = name
    }
}

const obj = new Student("Anu")

// Access
console.log(obj.name)

// Modify property ✅ allowed
obj.name = "Sinu"
console.log(obj.name)

// Reassign ❌ not allowed
obj = new Student("Meenu")   // Error*/
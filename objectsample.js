/*syntax
let objectname={
    key1:value1
    key2:value2
}
*/
//1)basic object literal
let student={
name:"anu",
age:10
//console.log(student.age)
}
console.log(student.name)
console.log(student.age)
console.log("******************************************")
//2)object literal with method
let a={
    firstname:"anu",
    lastname:"krishna",
    fullname :function(){
console.log(this.firstname+this.lastname)
    }
}
a.fullname()
console.log(a.firstname)
console.log(a.lastname)
console.log(a.fullname)
console.log("******************************************")
//3)short method
let student1={
    name:"sinu",
    study()
    {
        console.log(this.name)
    }
}
student1.study()
console.log(student1.name)
console.log("******************************************")
//4)object literal with parameterized
let student2={
    name:"sinu",
    study(subject)
    {
        console.log(this.name+" is studying "+subject)
    }
}
student2.study("maths")
student2.study("science")
console.log(student1.name)
console.log("******************************************")

//5)method with return
let student3 = {
    name: "Sinu",
    study(subject) {          // parameterized method
        return this.name + " is studying " + subject
    }
}

// Calling the method and storing the return value
let result1 = student3.study("Math")
let result2 = student3.study("Science")

// Printing the returned values
console.log(result1)  // Sinu is studying Math
console.log(result2)  // Sinu is studying Science

// Accessing property
console.log(student1.name) // Sinu
console.log("***************************")
//1.basic prgm
class Parent
{
    show()
    {
        console.log("hello")
    }
}
class Child extends Parent
{

}
let obj=new Child()
obj.show()
console.log("**************************************")
//2.
class Parent1
{
    show()
    {
        console.log("hello")
    }
}
class Child1 extends Parent
{
display()
{
     console.log("morning")
}
}
let obj1=new Child1()
obj1.show()
obj1.display()
console.log("**************************************")
//3.using constructor
class Person
{
    constructor(name)
    {
this.name=name
    }
    show()
    {
        console.log("hello  "+this.name)
    }
}
class Student extends Person
{
show()
    {
        console.log("hello  "+this.name)
    }
}
let p=new Student("sinu")
p.show()
console.log("**************************************")
//4.
//what is super keyword
//super is used to access parent class constructor or methods
class Person2 {
    constructor(name) {
        this.name = name;
    }
}

class Student2 extends Person2 {
    constructor(name, marks) {
        super(name);   // important
        this.marks = marks;
    }

    show() {
        console.log(this.name + " " + this.marks);
    }
}

let s = new Student2("Anu", 90);
s.show();
console.log("**************************************")
//5.


//6
class Person4 {
    constructor(name) {
        this.name = name;
         console.log(this.name);
    }
}

class Student4 extends Person4 {
    constructor(name) {
         super(name);  // calling parent constructor
        this.name=name;//already in parent.so not needed
        console.log("name is "+this.name);
       
    }
}

let s4 = new Student4("Anu");
//console.log(s4.name);
console.log("**************************************")
//4 super in method
class Parent3 {
    show() {
        console.log("Parent method");
    }
}

class Child3 extends Parent3 {
    
    show() {
        super.show();  // calling parent method
        console.log("Child method");
        super.show();  // calling parent method
    }
}

let p1 = new Child3();
p1.show()
console.log("**************************************")
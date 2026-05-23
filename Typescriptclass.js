"use strict";
class TypeScriptClass1 {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        return "hello" + this.name;
    }
}
const obj = new TypeScriptClass1("greeting");
const result = obj.greet();
console.log(result);
//
class Demo {
    greet1() {
        console.log("haiiiii");
    }
}
const obj1 = new Demo();
obj1.greet1();
//
class Demo1 {
    greet2(name) {
        console.log(name);
    }
}
const obj3 = new Demo1();
obj3.greet2("anu");
//
class Demo2 {
    sub;
    constructor(sub) {
        // console.log(sub)
        this.sub = sub;
    }
    greet3(name) {
        console.log(name + " " + this.sub);
        //console.log(sub)
    }
}
const obj4 = new Demo2("maths");
obj4.greet3("anu");
//
class Demo4 {
    // sub:string
    constructor(sub) {
        console.log(sub);
        // this.sub=sub
    }
    greet4(name) {
        //console.log(name+" "+this.sub)
        console.log(name);
        //console.log(sub)
    }
}
const obj5 = new Demo4("english");
obj5.greet4("amalu");

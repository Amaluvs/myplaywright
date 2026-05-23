class Parent3 {
    show(name) {
        console.log("Parent method");
        this.name = name;
    }
}

class Child3 extends Parent3 {
    show(name, marks) {
        this.marks = marks;
        super.show(name);
        console.log(this.name + " " + this.marks);
        console.log("Child method");
    }
}

let p1 = new Child3();
p1.show("sinu", 90);
console.log("**************************************")
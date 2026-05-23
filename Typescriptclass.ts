//prgm-1

class TypeScriptClass1
{
    name:string
    constructor(name:string)
    {
        this.name=name
    }
    greet():string
    {
return "hello"+this.name
    }
}
const obj=new TypeScriptClass1("greeting")
const result=obj.greet()
console.log(result)
//prgm-2
class Demo
{
    greet1()
    {
        console.log("haiiiii")
    }
}
const obj1=new Demo()

obj1.greet1()
//prgm-4
class Demo1
{
    greet2(name:string)
    {
console.log(name)
    }
}
const obj3=new Demo1()

obj3.greet2("anu")

//prgm-5
class Demo2
{
    sub:string
    constructor(sub:string)
    {
       // console.log(sub)
        this.sub=sub
    }
    greet3(name:string)
    {
console.log(name+" "+this.sub)

//console.log(sub)
    }
}
const obj4=new Demo2("maths")

obj4.greet3("anu")
//prgm-6
class Demo4
{
   // sub:string
    constructor(sub:string)
    {
       console.log(sub)
       // this.sub=sub
    }
    greet4(name:string)
    {
//console.log(name+" "+this.sub)
console.log(name)

//console.log(sub)
    }
}
const obj5=new Demo4("english")

obj5.greet4("amalu")
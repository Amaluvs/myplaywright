let x=[1,2,3,4,5,6]
console.log(x)

let y=Array(1,2,3)
console.log(y)

let z=Array(3)
console.log(z)

//z.push(1)
//z.push(2)
//z.push(3)
//console.log(z)

for(let i=1;i<=5;i++)
{
    z.push(i)
}
console.log(z)

//length-8(3+5)
console.log(z.length)

console.log(y.length)

//filter()
let result=z.filter(value=>value>2)//value just name
console.log(result)//out 3,4,5

//sort()-string
let fruits=["banana","apple","mango"]
fruits.sort()
console.log(fruits)

//numbers-asceding
let num=[10,2,9,5,8]
num.sort((a,b)=>a-b)
console.log(num)

//numbers-desceding
let num2=[10,2,9,5,8]
num.sort((a,b)=>b-a)
console.log(num2)

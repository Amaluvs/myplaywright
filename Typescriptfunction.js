"use strict";
//normal function
function greet() {
    console.log("hello");
}
greet();
//parameterized function-TypeScript can automatically identify the return type. This is called type inference.
function addition(a, b) {
    console.log(a + b);
}
addition(2, 4);
//return type
function sub(x, y) {
    return x - y;
}
console.log(sub(10, 5));
//never
/*function throwError(message:string)
{
    throw new Error(message)
}throwError('something went wrong')*/
function stop() {
    throw new Error("Stopped");
}
stop();

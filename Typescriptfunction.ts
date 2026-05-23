//normal function
function greet()
{
    console.log("hello")
}
greet()


//parameterized function-TypeScript can automatically identify the return type. This is called type inference.

function addition(a:number,b:number){
    console.log(a+b)
}
addition(2,4)

//return type

function sub(x:number,y:number):number{
    return x-y
}
console.log(sub(10,5))


//never
/*function throwError(message:string)
{
    throw new Error(message)
}throwError('something went wrong')*/

function stop(): never {//Function never reaches the end.
    throw new Error("Stopped")//throws an error, so the function ends immediately and never returns.Error is a built-in class in JavaScript/TypeScript.
}
stop()

//error comes ❌
//program stops immediately
//function never completes
//never is a datatype/return type used in a function signature.
//“This function will never complete normally.”
//new Error() → creates an object of the Error class
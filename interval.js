console.log(1);
console.log(2);
// After specific time this setTimeout function execute 4000 ms = 4s
// setTimeout(() => {
//     console.log(3);
// })
// setTimeout(() =>{
//     console.log('setout Number is' 3);
// } , 4000);
console.log(4);
console.log(5);
console.log(6);

// After specific time Repeat this setInterval function execute 2000 ms = 2s
// let num = 0;
// setInterval(() =>{
//     num++;
//     console.log('set time Interval num :', num);
// } , 2000)



 // repeat or continue this 
 // to stop setInterval function use  clearInterval (setInterval Id= clockId)
let num = 0;
const clockId = setInterval(() =>{
    num++;
    if (num > 6) {
        clearInterval(clockId);
    }
    console.log('set time Interval num :', clockId , num);
} , 2000)

// *************/////////************* */

// summary
// setTimeout() = A time event function used to call another function 
// after certain time period but executes the function only once.

/* For clearing the setTimeout(function , milliseconds)  used clearTimeout() */


// 1000 ms = 1s
setTimeout(function , milliseconds);
// to stop setTimeout function use  clearTimeout (setTimeoutId= myVar)
let myVar = setTimeout(function , milliseconds);
clearTimeout(myVar);


/* setInterval() = same as setTimeout() with a slice difference that the execution of the function
occurs continuously according to the specified time interval . Here , the time interval 
works like a gap between the execution. 

For clearing the setInterval() , used clearInterval()

*/

setInterval(function , milliseconds);
let myVar = setInterval(function , milliseconds);
// to stop
clearInterval(myVar)
setInterval(function () => {
    somethingElse();
}, 2000) ; // execute somethingElse() every 2 seconds.

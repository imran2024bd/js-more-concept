
/* task -01 */
function a(){
    console.log('a');
}

function b(){
    console.log('b');
}
// a();
// b();


/* task -02 */
function a(){
    console.log('a');
    b();
    console.log('aa');
}

function b(){
    console.log('b');
    console.log('bb');
}
// a();


/* task -03 */
function a(){
    console.log('a');
    b();
    console.log('aa');
}

function b(){
    console.log('b');
    d();
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dd');
}

function x (){
    console.log('x');
    y();
    console.log('xx');
}
function y (){
    console.log('y');
    z();
    console.log('yy');
}
function z (){
    console.log('z');
    console.log('zz');
}

setTimeout(() => {
    console.log('inside Timeout');
},2000)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
a();
x();

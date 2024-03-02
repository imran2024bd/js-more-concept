function checkAge(){
    // console.log(' log button');
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        // console.log(bBaria);
        const age = parseInt(ageText);
        if (isNaN(age)) {
            // console.log('Age not Found' , age , ageText);
            throw " Please enter a number";
        }
            else if (age < 18) {
                throw " Under age not allow"
            }
            else if (age > 30) {
                throw " Above 30 age not allow"
            }
            errorTag.innerHTML = '';
        
    }
    catch(err){
        console.log('ERROR' , err);
        // errorTag.innerHTML = 'something wrong'
        errorTag.innerHTML = 'ERROR :' + err;
    }
    finally{
        console.log('All Done inside try catch');
    }
    console.log(111);
}




/* 35-8 Error Handling: Try, Catch, Throw And Finally 
**************     *summary*   *****************
 try...catch

 01. The try statement defines a code block to run ( to try)
 02. The catch statement defines a code block to any error
  
 try {
    block of code to try
 }

 catch(err){
    Block of cpde to handle errors
 }
*/
const n= 100 , d = 10;

try{
    console.log(n/d);
    // forgot to define variable a
    console.log(a);
}

catch(error){
    console.log('ERROR message :' + error);
}
// ***OUTPUT****
// 10 try-catch.js:54:13
// ERROR message :ReferenceError: a is not defined
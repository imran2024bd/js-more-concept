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
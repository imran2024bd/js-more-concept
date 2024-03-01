const myLoader = () => {
    return new Promise((resolve , reject) => {
        const success = Math.random();
        // const success = true;
        if (success <= 0.5) {
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}
myLoader()
.then( data => console.log('resolved data' , data))
.catch( err => console.log(' reject the value' , err))

fetch('url')
.then( response => response.json())
.then( data => console.log(data))
.catch( err => console.log(err))

async function loadData(){
const res = await fetch('');
const data = await res.json();
console.log(data);
}
const taskLoader = async() =>{
    const res = await fetch('');
}


loadData();
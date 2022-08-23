'strict'
/* 
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if(a === 2 ) {
// resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })
// p.then((message) => {
//     console.log('this is in the then' + message)
// })
// // Anything inside "." is going to run for resolve  
console.log("hello World");
let promise = new Promise(function(resolve,reject){
    // executor(the producing code, "singer")
});
*/

// let promise = new Promise(function(resolve,reject){
//     // the function is executed automatically when the promis is constructed
//     // after 1 second signal that the job is done with the result "done"
// setTimeout(() => {
//     resolve('done')
// }, 2000);
// })

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log("Function: Your promise has been resolved")
                resolve();
            } else {
                console.log('Function: Your promise has not been resolved.');
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: thanks for resolving.");
}).catch(function(error){
    console.log('Harry: very Bad bro '+error);
})

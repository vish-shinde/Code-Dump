// let p = 70;
function func2(p){
    return new Promise(function(resolve,reject){
            (p > 60) ? resolve('Req accept') : reject('Req declined');
        });
}
// let pro = new Promise(function(resolve,reject){
//     if(p> 60){
//         resolve("Req Accept");
//     } else{
//         reject("Req declined");
//     }
     
 
// console.log(pro);
// let testResult = ((res) => {
//     console.log(res);
// });
// pro.then(testResult);

let testResult = func2(70).then(() => {
    console.log('yes');
}).catch(() => {
    console.log('no');
})
console.log(testResult);
/*
const checkPwd = function(pass) {
    return new Promise(function(resolve,reject) {
        const defaultPwd = 'root';
        setTimeout(() => {
            defaultPwd == pass ? resolve() : reject();
        }, 2000);
    })
}
document.getElementById('submit').addEventListener('click',test) 
    function test(){
    const passy = 'admin';
    checkPwd(passy).then(() => {
        console.log('Passwords matched');
    })
    .catch(() => {
console.log('Password wrong');
    })
} 
*/

fetch('test.txt').then(
    (result)=>{
        return result.text();
    }
 ).then((record)=>{
    console.log(record);
 })

fetch('test1.json').then(
    (result) =>  {
    return result.json();
}).then((record)=> {
    console.log(record);
})
let stu = [10,23,44,56];
for (let i= 0; i < stu.length; i++) {
    const element = stu[i];
    console.log(element);
}
// stu = number[Symbol.iterator]();
console.log(stu.next().value);

    
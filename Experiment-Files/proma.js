
function func1(p) {
    return new Promise((resolve,reject) =>{
        console.log('pending...');
        setTimeout(() => {
            p > 60 ? resolve("Your request is accepted")
            : reject("Your request is declined");    
        }, 3000);
    }) 
}
func1(50).then((res)=> {
    console.log(res);
}
 ).catch((err) => {
    console.log(err);
 })
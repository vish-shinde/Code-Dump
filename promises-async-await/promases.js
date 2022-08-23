function func11() {
    return new Promise(function(resolve,reject){
setTimeout(() => {
    const error = true;
    !error ? console.log(`Your promise has been
    resolved`) : console.log(`Your promise 
    has been rejected.`);

}, 2000);
    })
}

func11.then(function() {
    console.log("thnkas for resolving");
}).catch(function(error){
    console.log('Very Bad Bro');
})
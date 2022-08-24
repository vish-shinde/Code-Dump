
const checkpwd = function(pass){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            const defaultPwd = 'admin';
            defaultPwd == pass ? resolve() : reject();
        }, 2000);
        console.log("ehlo");

    });}
    // document.querySelector('.submit').addEventListener('click', checkpwd(),{
    //     checkpwd('admin').then(()=> {
    //             console.log("Paasword matched");
    //         }).catch(()=> {
    //             console.log("Denied");
    //         })
    // })

    document.getElementById('bang').addEventListener('click', e => {
        console.log('first click');
    })
    checkpwd('admin').then(()=> {
        console.log("Paasword matched");
    }).catch(()=> {
        console.log("Denied");
    })
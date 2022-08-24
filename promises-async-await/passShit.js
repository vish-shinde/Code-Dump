
// const checkpwd = function(pass){
//     return new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             const defaultPwd = 'admin';
//             defaultPwd == pass ? resolve() : reject();
//         }, 2000);
//         console.log("ehlo");

//     });}
//     // document.querySelector('.submit').addEventListener('click', checkpwd(),{
//     //     checkpwd('admin').then(()=> {
//     //             console.log("Paasword matched");
//     //         }).catch(()=> {
//     //             console.log("Denied");
//     //         })
//     // })

   
//     checkpwd('admin').then(()=> {
//         console.log("Paasword matched");
//     }).catch(()=> {
//         console.log("Denied");
//     })

    const checkpwd = function(pass) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                const defaultPwd = 'admin';
                defaultPwd == pass ? resolve() : reject();
            }, 1000);
            // console.log("Hello");
        })   
    }
document.getElementById('bang').addEventListener(('click'),function() {
    checkpwd('root').then(()=> {
        console.log("Paasword matched");
    }).catch(()=> {
        console.log("Access Denied");
    })
})



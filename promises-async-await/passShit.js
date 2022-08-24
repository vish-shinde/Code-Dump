const checkpwd = function(pass) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                const defaultPwd = 'admin';
                defaultPwd == pass ? resolve() : reject();
            }, 3000);
        })   
    }
document.getElementById('bang').addEventListener(('click'),function() {
   console.log("pending");
    checkpwd('root').then(()=> {
        console.log("Password matched");
    }).catch(()=> {
        console.log("Access Denied");
    })
})

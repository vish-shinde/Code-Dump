const checkpwd = function(pass) {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            const defaultPwd = 'admin';
            defaultPwd == pass ? resolve('Password matched') : reject('Access denied') ;
        }, 2000);
    })
}
document.getElementById('bang').addEventListener(('click', function(res,err) {
    checkpwd('root').then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
} ))

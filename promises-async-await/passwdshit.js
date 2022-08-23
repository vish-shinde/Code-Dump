function checkpwd(pass){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const defaultPwd = 'admin';
            // if(defaultPwd == pass)
            // resolve();
            // else 
            // reject(); 
            defaultPwd == pass ? resolve() : reject();
        }, 1000);
    }); }

     let passEntered = 'admin';
     checkpwd('admin').then(() => {
        console.log("Password Matched");
     }).catch(() => {
        console.log('Acsess Denied');
     });

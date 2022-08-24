const promise = new Promise(resolve => {
    document.getElementById('bang').addEventListener('click', e => {
    setTimeout(() => {
console.log('first click');
resolve(e);        
    }, 1000);
    
},) } ) 
promise.then();
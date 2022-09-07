document.getElementById('submit').addEventListener('click', test)
function test() {
    // console.log("Pending...");
    document.getElementById('pend').innerHTML = 'Pending...';
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
                return result.json();
            })
            .then((record) => {
                console.log(record);
                for (let x in record){
            document.getElementById('d1').innerHTML += `<br> UserId : ${record[x].id} Title: ${record[x].title}<br> <br>`;
            console.log(`UserID : ${record[x].id} Title : ${record[x].title}  `);
            }})
    }, 2000);
        // fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
        //     return result.json();
        // })
        // .then((record) => {
        //     console.log(record);
        //     for (let x in record){
        // document.getElementById('d1').innerHTML += `UserId : ${record[x].id} Title: ${record[x].title}<br> <br>`;
        // console.log(record[x].id);
        // }})    
    }


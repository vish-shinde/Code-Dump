// const students = [
//     { name: 'Vishal', subject : "Golang"},
//     {name: 'Harry', subject: 'JavaScript'}
// ]

// function enrollStudent(student){
//     setTimeout(() => {
//         students.push(student); 
//     }, 2000);
// }

// function getStudents(){
//     setTimeout(function(){
//         let str = '';
    
//     })
// }

function getUsers(onSuccess){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(onSuccess) {
                resolve([
                    {id : 1, name: 'Jerry'},
                    {id : 2, name: 'Eleine'},
                    {id : 3, name: 'Goerge'},
                ])
            } else {
                reject('Failed to fetch data!')
            }
          }, 2000)
        })
      }

getUsers(true).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })

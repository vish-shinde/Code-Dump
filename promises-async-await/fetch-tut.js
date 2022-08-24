/* fetch(url).then(function(response) {

} )
.catch(function (err) {

}) 
*/ 
fetch('people.json').then(function(response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
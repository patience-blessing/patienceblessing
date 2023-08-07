var saveEl = document.getElementById("save-el");
var addBtn = document.getElementById("btn-add")
var btn5 = document.getElementById('btn-5')
var btn9 = document.getElementById('btn-9')
var pResults = document.getElementById('results')

var add = 0;
// var counts = "Cars Counted"
addBtn.addEventListener("click", () => {
 add = add+1;
saveEl.innerHTML = add + " " ;
})
btn5.addEventListener("click", () => {
var countStr = add * add;
pResults.textContent += countStr;
// addBtn.textContent = 0;
add = 0;
})
btn9.addEventListener("click", () => {
   var add = 0;
   add = 0;
   saveEl.textContent = 0;
   var reset = 'previous entries : ';
   pResults.textContent = reset;
})

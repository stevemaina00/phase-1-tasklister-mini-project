document.addEventListener("DOMContentLoaded", () => {
 // your code here
 let form = document.querySelector("form");
 form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let data =document.querySelector("#new-task-description" ).value
  showToDo(e.target.data);
  form.reset();
 })

})
 function showToDo(toDo=document.querySelector("#new-task-description" ).value){
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.style.color="yellow";
  btn.style.background="red";
  btn.textContent="x";
  
  li.textContent=`${toDo}`
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
  btn.addEventListener("click", deleteList)

 }
function deleteList(e){
  e.target.parentNode.remove();
}
 


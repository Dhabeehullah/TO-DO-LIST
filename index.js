var inputBox=document.getElementById("task");
var addTask=document.getElementById("hit");
var removeTask=document.getElementsByClassName("cancel1");
var tasksContainer=document.querySelector(".tasks");

addTask.addEventListener("click",function(){
  if(inputBox.value === ""){
    alert("enter something");
    saveTask();
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    li.setAttribute("class","checked");
    document.querySelector("ul.tasks").appendChild(li);

    let createImg=document.createElement("img");
    createImg.setAttribute("class","cancel1");
    createImg.setAttribute("src","cancel.svg");
    li.appendChild(createImg);
    saveTask();
  }
  inputBox.value="";
  saveTask();
});

tasksContainer.addEventListener("click",function(e){
 
  if ( e.target.tagName  === "LI" ) {
      
      e.target.classList.toggle("decorate");
      if(e.target.classList.contains("decorate")){
        alert("Well Done! Bro.💪 U Completed ur Task.");
      }
      else{
        alert("What... U Still Didn't  finish ur task. Ur a last hope in ur bloodline idiot. So,👊 stay hard.");
      }
      saveTask();
     
  }
  else if( e.target.tagName  === "IMG"){
    e.target.parentElement.remove();
    saveTask();
  }
});

function saveTask(){
  localStorage.setItem("data",tasksContainer.innerHTML);
}
function showTask(){
  tasksContainer.innerHTML=localStorage.getItem("data");
}
showTask();




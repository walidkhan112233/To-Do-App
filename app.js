const inputBar = document.getElementById("input-bar");
const listContainer = document.getElementById("list-container");

// adding tasks to list on clicking the +Add btn
function addTask(){
    if(inputBar.value === ''){
        alert("Error! You must Write Someting!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBar.value;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBar.value = "";
    DataToSave();
}

// check , uncheck , or linethrough click karna par
listContainer.addEventListener("click" , function(e){        
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        DataToSave();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        DataToSave();
    } 
}, false); 

// data ko save karna taka reload ka baad bhi listTASks mojuud ho
function DataToSave(){
      localStorage.setItem("data" , listContainer.innerHTML);
}

function ShowSavedTasks (){
    listContainer.innerHTML = localStorage.getItem("data");
}
ShowSavedTasks ();


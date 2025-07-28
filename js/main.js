const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");


// A function to add your todo item to your list
function addTask(event){
  // Let the browser handle validation first
    if (!event.target.checkValidity()) {
        return true; // Allow default behavior (show validation message)
    }
    
    event.preventDefault(); // Now prevent submission since form is valid
        
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    todoList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = (" ");
    li.appendChild(span)

    inputBox.value = "";
  
    
    return false; // Prevent form submission
  }

// This function adds the event toggle styling to the list item on click
function completeStatus(event){
  if (event.target.tagName=== 'LI') {
    event.target.classList.toggle("completed");
  }
}

// This function adds a click event to remove the list item by clicking the span
todoList.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);
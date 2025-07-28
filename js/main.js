const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");


// A function to add your todo item to your list
function addTask(event){
  // Let the browser handle validation first
    if (!event.target.checkValidity()) {
        return true; // Allow default behavior (show validation message)
    }
    
    event.preventDefault(); // Now prevent normal submission since form is valid
    //create the todo item    
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    todoList.appendChild(li);
    //add delete button
    let span = document.createElement("span");
    span.innerHTML = (" ");
    li.appendChild(span)
    //clears the input box so it is ready for the next task 
    inputBox.value = "";
    saveData();
        return false; // Prevent form submission
}

// This code adds an event listener to the todo list element that handles two different types of clicks:
//toggle completion
todoList.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("completed");
    saveData();
  } //Delete Items
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);
//This functions saves your list data in your local browser to prevent losing your list because of a browser refresh
function saveData(){
  localStorage.setItem("data", todoList.innerHTML);
}
// This function retrieves your stored data to display back to you
function showTask(){
  todoList.innerHTML = localStorage.getItem("data");
}
showTask();
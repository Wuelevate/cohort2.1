// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Prevent empty tasks

    // Create list item (li)
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create "Complete" button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔ Complete";
    completeBtn.style.backgroundColor = "#4CAF50"; // Green
    completeBtn.style.color = "white";
    completeBtn.style.marginLeft = "10px";
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed"); // Toggle completed class
    });

    // Create "Delete" button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌ Delete";
    deleteBtn.style.backgroundColor = "#f44336"; // Red
    deleteBtn.style.color = "white";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.addEventListener("click", function () {
        li.remove(); // Remove task from list
    });

    // Add buttons to the list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add list item to the task list
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";
}

// Event listener for "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Event listener for pressing "Enter" key to add a task
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});

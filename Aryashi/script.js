document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    // Check if there are tasks in local storage and display them on the page
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks();
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        taskInput.value = "";
      }
    });
  
    // Function to render tasks on the page
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <input type="checkbox" data-index="${index}" ${task.completed ? "checked" : ""}>
          <span>${task.text}</span>
          <button data-index="${index}">Delete</button>
        `;
        taskList.appendChild(taskItem);
      });
    }
  
    // Function to handle checkbox clicks
    taskList.addEventListener("click", (event) => {
      if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        const index = event.target.dataset.index;
        tasks[index].completed = event.target.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
  
    // Function to handle delete button clicks
    taskList.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const index = event.target.dataset.index;
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
      }
    });
  });
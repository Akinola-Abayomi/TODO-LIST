// Function to add a new task
function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const span = document.createElement("span");
    span.textContent = "\u00D7"; // Unicode for '×' symbol
    li.appendChild(span);

    // Append the new item to the list
    listContainer.appendChild(li);
    inputBox.value = "";

    saveData();
}

// Function to manage task completion and deletion
document.getElementById("list-container").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save the list to local storage
function saveData() {
    const listContainer = document.getElementById("list-container");
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Function to load the list from local storage
function loadData() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

// Load saved tasks on page load
loadData();

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.onclick = function () {

    if (input.value === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    // Task text

    const taskText = document.createElement("span");
    taskText.textContent = input.value;

    // Complete task when clicked
    taskText.onclick = function () {
        taskText.style.textDecoration =
            taskText.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    };

    // Delete button

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
};
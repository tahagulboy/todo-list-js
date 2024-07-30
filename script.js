document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(taskText));
        
        const closeButton = document.createElement("button");
        closeButton.appendChild(document.createTextNode("X"));
        closeButton.className = "close";
        closeButton.onclick = () => {
            li.remove();
        };

        li.appendChild(closeButton);
        taskList.appendChild(li);

        taskInput.value = "";

        li.onclick = () => {
            li.classList.toggle("completed");
        };
    }

    document.querySelector("button").onclick = addTask;
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
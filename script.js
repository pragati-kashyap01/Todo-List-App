const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const input = document.getElementById("taskInput");
    const text = input.value;

    const newTask = document.createElement("p");
    newTask.innerText = text;

    const list = document.getElementById("taskList");
    list.appendChild(newTask);

    input.value = "";
});

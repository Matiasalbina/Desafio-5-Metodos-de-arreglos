let tasks = [
    { id: 16, description: "Hacer mercado", completed: false },
    { id: 60, description: "Estudiar para la prueba", completed: false },
    { id: 24, description: "Sacar a pasear a Tobby", completed: false },
  ];
  
  const toDoForm = document.getElementById("toDoForm");
  
  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
  });
  
  function renderTasks() {
    const taskList = document.getElementById("taskList");
    const total = document.getElementById("total");
    const completed = document.getElementById("completed");
    let completedCounter = 0;
    taskList.innerHTML = "";
  
    tasks.forEach((task) => {
      if (task.completed) completedCounter++;
      const taskItem = document.createElement("tr");
      taskItem.innerHTML = `
      <td><label for="task${task.id}">${task.id}</label></td>
      <td><label for="task${task.id}">${task.description}</label></td>
      <td><input type="checkbox" id="task${task.id}" class="form-check-input" onchange="toggleTask(${task.id})" ${
      task.completed ? "checked" : ""
      }></td>
      <td><i class="bi bi-x-square-fill" onclick="deleteTask(${task.id})"></i></td>
      `;
      taskList.appendChild(taskItem);
    });
  
    total.innerHTML = tasks.length;
    completed.innerHTML = completedCounter;
  }
  
  function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== "") {
      const max = Math.ceil(tasks.length / 100) * 100;
      const min = max - 100;
      let newid = getRandomId(min, max);
      while (tasks.some(task => task.id === newid)) {
        newid = getRandomId(min, max);
      }
      const newTask = {
        id: newid,
        description: taskDescription,
        completed: false,
      };
      tasks.push(newTask);
      taskInput.value = "";
      renderTasks();
    } else {
      alert("Por favor ingresa una descripción para la tarea.");
    }
  }
  
  function toggleTask(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      renderTasks();
    }
  }
  
  function deleteTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId);
    renderTasks();
  }
  
  renderTasks();

  function color_Body() {
    element = document.querySelector('body')
    element.style.backgroundColor = 'gainsboro'

  }
   color_Body()
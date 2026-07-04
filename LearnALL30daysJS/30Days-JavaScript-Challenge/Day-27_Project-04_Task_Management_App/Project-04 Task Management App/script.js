document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskContainer = document.getElementById('task-container');
  
    loadTasks();
  
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });
  
    taskContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-btn')) {
            editTask(e.target);
        }
        if (e.target.classList.contains('delete-btn')) {
            if (confirm("Are you sure you want to delete this task?")) {
                deleteTask(e.target);
            }
        }
    });
  
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(task) {
            createTaskElement(task);
        });
    }
  
    function addTask() {
        const titleInput = document.getElementById('task-title');
        const descriptionInput = document.getElementById('task-description');
        const dateInput = document.getElementById('date');
  
        const task = {
            title: titleInput.value,
            description: descriptionInput.value,
            date: dateInput.value,
            id: Date.now()
        };
  
        createTaskElement(task);
        saveTasks();
  
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    }
  
    function editTask(editBtn) {
        const taskItem = editBtn.closest('.task-item');
        const taskTitle = taskItem.querySelector('.task-name').textContent;
        const taskDescription = taskItem.querySelector('.task-desc').textContent;
        const taskDate = taskItem.querySelector('.task-date').textContent;
        const taskId = taskItem.dataset.taskId;
  
        document.getElementById('task-title').value = taskTitle;
        document.getElementById('task-description').value = taskDescription;
        document.getElementById('date').value = taskDate;
  
        // Remove the task from the DOM and local storage
        taskItem.remove();
        saveTasks();  // Save changes to local storage
  
        // Update local storage to reflect the removal
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(function(task) {
            return task.id != taskId;
        });
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    function deleteTask(deleteBtn) {
        const taskItem = deleteBtn.closest('.task-item');
        const taskId = taskItem.dataset.taskId;
  
        taskItem.remove();
  
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const updatedTasks = tasks.filter(function(task) {
            return task.id != taskId;
        });
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  
    function createTaskElement(task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.dataset.taskId = task.id;
  
        taskItem.innerHTML = `
            <div class="task-info">
                <h3 class="task-name">${task.title}</h3>
                <p class="task-desc">${task.description}</p>
                <p class="task-date">${task.date}</p>
            </div>
            <div class="task-actions">
                <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
  
        taskContainer.appendChild(taskItem);
    }
  
    function saveTasks() {
        const tasks = Array.from(taskContainer.children).map(function(taskItem) {
            return {
                title: taskItem.querySelector('.task-name').textContent,
                description: taskItem.querySelector('.task-desc').textContent,
                date: taskItem.querySelector('.task-date').textContent,
                id: taskItem.dataset.taskId
            };
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
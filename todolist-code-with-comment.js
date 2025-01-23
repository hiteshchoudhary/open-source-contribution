/*What I want to do is as soon as the page loads this, some level of code should be executed.Because all these things have a potential failure as well, because maybe there is some issue.There is something server delay or something you're trying to get a button here which says add task.We expect that it is already there, but it is not.Maybe it is not there.So in that case, this piece of code will actually not work because your Dom was not ready.So turns out it's a good idea that once the Dom content is loaded, then I want to grab my input and ID and i would like to do all my task.
so applying event Listener on Document
*/

document.addEventListener("DOMContentLoaded", function () {
  // First grab all thing
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  /*
  For storing task we need Array.
  It will always start as an empty array, but turns out I can use an Or operation that gives its empty array.If there is nothing inside the local storage, and you cannot just go ahead and get anything from the local storage like that, you have to write code for it, which is local storage again.And I can just say, hey, get item and this will grab your item.Make sure you provide the exact same key that you are using for setting the item.
 */
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task) {
    renderTasks(task);
  });

  addTaskButton.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    //checking
    if (taskText === "") return;

    //we also want unique id for each task so create object
    const newTask = {
      //Date.now() will not be same as time passes ,that's why we use this for id
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    //pushing newTask into Array
    tasks.push(newTask);
    //after pushing,clear the input
    todoInput.value = "";
    // console.log(tasks);

    // after clearing input,use saveTasks method to add task into local storage
    saveTasks();
    //for displaying on dom immediately
    renderTasks(newTask);
  });

  // Handling local storage
  //this function save task in local storage
  function saveTasks() {
    //local storrage api invoked by using kw localStorage. so we need set item which is a object or function which takes key-value pair.Key can be of any type,but 'value' should be string.Value can't store arrays,objects.We use Json.stringfy to covert our array(tasks) into string
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // At the same time i also want to read from local storage and want to render it to DOM
  }

  //As soon as page loads,i want to read from the local storage,grab all the task,store the task inside this array,and then immediately after that i would love to run a loop.Inside loop i will read all the individual tasks from this array,and would love to call my method on each of this task so that it can actually go ahead and render it
  // This func. pick up task from local storage,since array have multiple task at a time so we need to careful in selecting task + select task one at a time
  //Render:- display things on the DOM
  function renderTasks(task) {
    // console.log(task); for understanding

    //display on DOM
    const li = document.createElement("li");
    // 'data-id' = aria tag
    li.setAttribute("data-id", task.id);

    //check task complete
    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
     <span>${task.text}</span>
     <button>Delete</button> 
    `;

    //putting eventListener specifically on 'li' not on button
    li.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") {
        return;
      }

      task.completed = !task.completed;
      //after that we would love to remove a class 'completed' and we would love to add a class 'completed'.Use toggle
      li.classList.toggle("completed");
      //for saving to localstorage after modification
      saveTasks();
    });

    //here putting eventListener specifically on button
    li.querySelector("button").addEventListener("click", function (e) {
      //stop event bubbling bcz it goes to parent element as well i.e.,'li' .Basically prevent toggle from firing
      //And In fact on li there is also an event listener so we don't wan't to trigger li ..so
      e.stopPropagation();

      //update or fresh array
      //only true value will be filtered back,if i don't d this,then rest of all elements will be deleted except where i m clicking
      tasks = tasks.filter((t) => t.id !== task.id);

      //Now remove this given task
      li.remove();
      //but not the task which is in local storage so
      saveTasks();
    });

    todoList.appendChild(li);
  }
});

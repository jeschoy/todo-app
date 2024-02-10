const form = document.getElementById('form');
let inputBox = document.getElementById('newItem');
const list = document.getElementById('todos');
const savedList = JSON.parse(localStorage.getItem('todos')) || [];


for (let i = 0; i < savedList.length; i++) {
  let newTodoDiv = document.createElement('div');
  let newTask = document.createElement('li');
  let delBtn = document.createElement('button');
  newTask.style.display = 'inline-block';
  delBtn.innerText = 'x';
  newTask.innerText = savedList[i].task;
  newTask.isCompleted = savedList[i].isCompleted ? true : false;
  if (newTask.isCompleted) {
    newTask.style.textDecoration = 'line-through';
  }

  newTodoDiv.appendChild(delBtn);
  newTodoDiv.appendChild(newTask);
  list.appendChild(newTodoDiv);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let newTodoDiv = document.createElement('div');
  let newTask = document.createElement('li');
  let delBtn = document.createElement('button');
  newTask.style.display = 'inline-block';
  delBtn.innerText = 'x';
  newTask.innerText = inputBox.value;
  newTask.isCompleted = false;

  newTodoDiv.appendChild(delBtn);
  newTodoDiv.appendChild(newTask);
  list.appendChild(newTodoDiv);

  form.reset();

  savedList.push({ task: newTask.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedList));
});

list.addEventListener('click', function(e) {
  let selectedItem = e.target;
  if (selectedItem.tagName === 'LI') {
    if(!selectedItem.isCompleted) {
      selectedItem.style.textDecoration = 'line-through';
      selectedItem.isCompleted = true;
    } else {
      selectedItem.style.textDecoration = 'none';
      selectedItem.isCompleted = false;
    }

    for (let i = 0; i < savedList.length; i++) {
      if (savedList[i].task === selectedItem.innerText) {
        savedList[i].isCompleted = !savedList[i].isCompleted;
        localStorage.setItem('todos', JSON.stringify(savedList));
      }
    }
  } else if (selectedItem.tagName === 'BUTTON') {
      let taskToRemove = selectedItem.parentElement;
      let taskText = selectedItem.nextElementSibling.innerText;
      for (let i = 0; i < savedList.length; i++) {
        if((savedList[i].task) === taskText){
          savedList.splice(i,1);
        }
      }
      localStorage.setItem('todos', JSON.stringify(savedList));
      taskToRemove.remove();
  }
})
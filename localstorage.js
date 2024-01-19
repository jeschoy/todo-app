const list = document.querySelector('#todos');
const form = document.querySelector('form');

const savedList = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < savedList.length; i++) {
  let newTask = document.createElement('li');
  let delBtn = document.createElement('button');
  delBtn.innerText = 'x';
  newTask.innerText = savedList[i].task;
  newTask.isCompleted = savedList[i].isCompleted ? true : false;
  if (newTask.isCompleted) {
    newTask.style.textDecoration = 'line-through';
  }
  list.appendChild(newTask);
  newTask.prepend(delBtn);
}
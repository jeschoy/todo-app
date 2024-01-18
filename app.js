const form = document.querySelector('form');
const submitBtn = document.getElementsByClassName('.submit');
const inputBox = document.querySelector('input');
const list = document.querySelector('#todos');

const savedList = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < savedList.length; i++) {
  let newTask = document.createElement('li');
  newTask.innerText = savedList[i].task;
  newTask.isCompleted = savedList[i].isCompleted ? true : false;
  if (newTask.isCompleted) {
    newTask.style.textDecoration = 'line-through';
  }
  list.appendChild(newTask);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const newTask = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerText = 'x'
  newTask.innerText = inputBox.value;
  list.appendChild(newTask);
  newTask.prepend(delBtn);
  form.reset();

  savedList.push({ task: newTask.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedList));
})

list.addEventListener('click', function(e) {
  const selectedItem = e.target.tagName.toLowerCase();
  if(selectedItem === 'li' && !selectedItem.isCompleted) {
    e.target.style.textDecoration = 'line-through';
    selectedItem.isCompleted = true;
  } else if (selectedItem === 'li' && selectedItem.isCompleted) {
      e.target.style.textDecoration = 'none';
      e.target.isCompleted = false;
    } else if (selectedItem === 'button') {
    e.target.parentNode.remove();
  }
})
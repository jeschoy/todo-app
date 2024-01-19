const form = document.querySelector('form');
const submitBtn = document.getElementsByClassName('.submit');
const inputBox = document.querySelector('input');
const list = document.querySelector('#todos');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let newTask = document.createElement('li');
  let delBtn = document.createElement('button');
  delBtn.innerText = 'x';
  newTask.innerText = inputBox.value;
  newTask.isCompleted = false;
  list.appendChild(newTask);

  form.reset();

  savedList.push({ task: newTask.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedList));

  newTask.prepend(delBtn);
})

list.addEventListener('click', function(e) {
  let selectedItem = e.target.tagName.toLowerCase();
  console.log(savedList[0].isCompleted = true)
  if(selectedItem === 'li' && !selectedItem.isCompleted) {
    e.target.style.textDecoration = 'line-through';
    e.target.isCompleted = true;
  } else if (selectedItem === 'li' && selectedItem.isCompleted) {
      e.target.style.textDecoration = 'none';
      e.target.isCompleted = false;
    } else if (selectedItem === 'button') {
    e.target.parentNode.remove();
  }
})


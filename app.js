const form = document.querySelector('form');
const submitBtn = document.getElementsByClassName('.submit');
const inputBox = document.querySelector('input');
const list = document.querySelector('#todos');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const newTask = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerText = 'X'
  newTask.innerText = inputBox.value;
  list.appendChild(newTask);
  newTask.prepend(delBtn);
  form.reset();
})

list.addEventListener('click', function(e) {
  const selectedItem = e.target.tagName.toLowerCase();
  if(selectedItem === 'li') {
    e.target.style.textDecoration = 'line-through';
  } else if (selectedItem === 'button') {
    e.target.parentNode.remove();
  }
})
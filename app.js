const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const inputBox = document.querySelector('input');
const list = document.querySelector('#todos');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  newTodo();
})

const newTodo = () => {
  const newTask = document.createElement('li');
  newTask.innerText = inputBox.value;
  list.appendChild(newTask);
  form.reset();
}
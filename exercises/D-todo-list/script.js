function todoList(todos) {
  // Write your code here...
  let content = document.getElementById('content');
  let unordered = document.createElement('ul');

  for (let element of todos) {
    let list = document.createElement('li');
    list.textContent = element.todo;

    list.addEventListener('click', element => {
      if (element.target.style.textDecoration === 'line-through') {
        element.target.style.textDecoration = 'none';
      } else {
        element.target.style.textDecoration = 'line-through';
      }
    })
    unordered.appendChild(list);
  }
  content.appendChild(unordered);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);
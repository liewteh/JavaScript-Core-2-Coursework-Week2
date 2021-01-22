function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.getElementById('content');
  let unordered = document.createElement('ul');

  for (let item of shopping) {
    let list = document.createElement('li');
    list.innerHTML = item;
    unordered.appendChild(list);
  }
  content.appendChild(unordered);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

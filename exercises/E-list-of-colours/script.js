function listOfColours(colours) {
  // Write your code here...
  let content = document.getElementById('content');
  let dropBoxSelect = document.createElement('select');
  let paragraph = document.createElement('p');

  for (let color of colours) {
    let dropDownColor = document.createElement('option');
    dropDownColor.textContent = color;

    dropBoxSelect.appendChild(dropDownColor);
  }

  dropBoxSelect.addEventListener('change', function () {
    paragraph.textContent = `You have selected ${dropBoxSelect.value}!`;
    paragraph.style.color = `${dropBoxSelect.value}`;
  });

  content.appendChild(paragraph);
  content.appendChild(dropBoxSelect);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
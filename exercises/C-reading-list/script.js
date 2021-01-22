function readingList(books) {
  // Write your code here...
  let content = document.getElementById('content');
  let h1 = document.createElement('h1');
  h1.innerText = 'Book List';
  content.appendChild(h1);

  let unordered = document.createElement('ul');
  unordered.style.listStyle = 'none';
  unordered.style.display = 'flex';
  unordered.style.flexWrap = 'wrap';
  unordered.style.padding = '20px';
  unordered.style.width = 'calc(100% - 41px)';

  for (let book of books) {
    let list = document.createElement('li');
    list.style.width = 'calc(25% - 51px)';
    list.style.margin = '15px';
    list.style.padding = '10px';
    list.style.minWidth = '350px';

    if (book.alreadyRead === true) {
      list.style.backgroundColor = 'green';
    } else {
      list.style.backgroundColor = 'red';
    }

    let paragraph = document.createElement('p');
    paragraph.style.fontSize = '14px';
    paragraph.innerText = `${book.title} - ${book.author}`;

    let image = document.createElement('img');
    image.style.width = '40%';

    image.src = book.imageCover;

    list.appendChild(paragraph);
    list.appendChild(image);
    unordered.appendChild(list);
    h1.appendChild(unordered);
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imageCover: 'https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg'
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imageCover: 'https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imageCover: 'https://imagery.pragprog.com/products/59/tpp_xlargecover.jpg?1339433898'
  }
];

readingList(books);
const book = {
  title: 'Harry Potter 11',
  author: 'Fabio Mendes',
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);
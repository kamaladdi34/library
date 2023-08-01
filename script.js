const addBookButton = document.querySelector('.add-book-btn');
const booksContainer = document.querySelector('.books-container');

addBookButton.addEventListener('click',(e)=>{
    console.log(e);
})
const books = [];
function Book(name,author,isRead,index,DOMnode){
    this.name = name;
    this.author = author;
    this.isRead = isRead;
    this.index = index;
    this.DOMnode = DOMnode;
}
function addBookToLibrary(name,author,isRead) {
    books.push(new Book(name,author,isRead,books.length,createBookNode(name,author,books.length)))
}
function createBookNode(name,author,index){
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    const readToggle = document.createElement('div');
    readToggle.classList.add('read-toggle');
    const checkBoxLabel = document.createElement('label');
    checkBoxLabel.htmlFor = 'read-checkbox' + index;
    checkBoxLabel.textContent = 'Read';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'read-checkbox' + index;
    readToggle.appendChild(checkBoxLabel);
    readToggle.appendChild(checkBox);
    bookInfo.appendChild(readToggle);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book-btn');
    deleteButton.textContent = 'Delete';
    bookInfo.appendChild(deleteButton);
    const book = document.createElement('div');
    book.classList.add('book');
    const bookTitle = document.createElement('h1');
    bookTitle.textContent = name;
    bookTitle.classList = 'book-title';
    const bookAuthor = document.createElement('cite');
    bookAuthor.textContent = `by ${author}`;
    bookAuthor.classList.add('book-author');
    book.appendChild(bookInfo);
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    booksContainer.appendChild(book);
    return book;
}
addBookToLibrary('Hello','Author',false)
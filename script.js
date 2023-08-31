const addBookButton = document.querySelector('.add-book-btn');
const booksContainer = document.querySelector('.books-container');
const addBookPoPup = document.querySelector('.add-book');
const bookNameInput = document.querySelector('.book-name-input');
const bookAuthorInput = document.querySelector('.book-author-input');
const bookReadInput = document.querySelector('.book-read-input');
const createBookButton = document.querySelector('.create-book-btn');
createBookButton.addEventListener('click',(event)=>{
    let bookName = bookNameInput.value;
    let bookAuthor = bookAuthorInput.value;
    let isRead = bookReadInput.checked;
    event.preventDefault();
    if(bookName == ''){
        bookNameInput.reportValidity();;
        return;
    }
    if(bookAuthor == ''){
        bookAuthorInput.reportValidity();;
        return;
    }
    addBookToLibrary(bookName, bookAuthor, isRead);
    addBookPoPup.style.display = 'none';
})
addBookButton.addEventListener('click',(event)=>{
    addBookPoPup.style.display = 'flex';
    bookNameInput.value = bookAuthorInput.value = '';
    bookAuthorInput.checked = false;
})
const books = [];
class Book{
    constructor(name,author,isRead,index,DOMnode){
        this.name = name;
        this.author = author;
        this.isRead = isRead;
        this.index = index;
        this.DOMnode = DOMnode;
    }
}
function addBookToLibrary(name,author,isRead) {
    books.push(new Book(name,author,isRead,books.length,createBookNode(name,author,isRead,books.length)))
}
function createBookNode(name,author,isRead,index){
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    const checkBoxLabel = document.createElement('label');
    checkBoxLabel.htmlFor = 'read-checkbox' + index;
    checkBoxLabel.textContent = 'Read';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'read-checkbox' + index;
    checkBox.checked = isRead;
    checkBox.addEventListener('change',(event)=>{
        books[index].isRead = event.target.checked;
    })
    checkBoxLabel.appendChild(checkBox);
    checkBoxLabel.classList.add('read-toggle');
    bookInfo.appendChild(checkBoxLabel);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book-btn');
    deleteButton.addEventListener('click',(e)=>{
        booksContainer.removeChild(books[index].DOMnode);
        delete books[index];
    });
    const svgDeleteIcon = document.createElement('img');
    svgDeleteIcon.classList.add('svg-icon')
    deleteButton.appendChild(svgDeleteIcon);
    svgDeleteIcon.src= './icons/delete_outline.svg'
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
addBookToLibrary('A Game of Thrones','George R. R. Martin',true)
addBookToLibrary('The Lord of the Rings','John Ronald Reuel Tolkien',true)
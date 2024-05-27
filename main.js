const Books = [];
const addButton = document.getElementById('addButton')
const addDialog = document.getElementById('addDialog');

addButton.addEventListener("click", ()=>{
    addDialog.showModal();
})

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${title} is written by ${author}, has ${pages} pages and ${read} it.`
    }
}
function addBook(book){
    Books.push(book);
}
addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'read'))
addBook(new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 398, 'read'))
addBook(new Book('The Two Towers', 'J.R.R. Tolkien', 327, 'read'))

function updateTable(){
    let books = document.getElementsByClassName('heading')[0]
    let fields = ['title', 'author', 'pages', 'read']
    for(i=0; i<Books.length; i++){
        let newBook = document.createElement('div')
        newBook.className = 'book'
        fields.forEach(field => {
            let item = document.createElement('li')
            item.textContent = Books[i][field]
            newBook.appendChild(item)
        })
        books.appendChild(newBook);
    }
    
}
updateTable()
for(i = 0; i < Books.length; i++){
    console.log(Books[i].info());
}
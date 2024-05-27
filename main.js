

const Books = [];
const addButton = document.getElementById('addButton')
const addDialog = document.getElementById('addDialog');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.querySelector('select');
const cancelButton = document.getElementById('cancelBtn');
const confirmButton = document.getElementById('confirmBtn');
const form = document.querySelector('form');
const remButtons = document.getElementsByClassName('remove');
const booksDOM = document.getElementsByClassName('heading')[0]

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
Book.prototype.toggleread = function(){
    if(this.read == 'read'){
        this.read = 'not read';
    }else{
        this.read = 'read';
    }
}

function updateTable(){
    let fields = ['title', 'author', 'pages', 'read']
    booksDOM.innerHTML='';
    for(i=0 ;i<Books.length; i++){

        let newBook = document.createElement('div')
        newBook.className = 'book'
        newBook.id = `${i}`
        fields.forEach(field => {
            let item = document.createElement('li')
            item.textContent = Books[i][field]
            newBook.appendChild(item)
        })
        let remButton = document.createElement('button');
        remButton.textContent = 'X';
        remButton.addEventListener('click', ()=>{
            id = remButton.parentElement.id;
            Books.splice(id,1);
            remButton.parentElement.remove();
        });
        let readButton = document.createElement('button');
        readButton.addEventListener('click', ()=>{
            id = readButton.parentElement.id;
            Books[id].toggleread();
            if(readButton.textContent = 'read'){
                readButton.textContent = 'not read';
            }else{
                readButton.textContent = 'read';
            }
            updateTable();
        });
        readButton.textContent = Books[i].read=='read' ? 'un-read' : 'read';
        newBook.appendChild(readButton);
        newBook.appendChild(remButton)
        booksDOM.appendChild(newBook);
    }
}

confirmButton.addEventListener("click", ()=>{
    event.preventDefault();
    addBook(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value));
    updateTable();    
    addDialog.close();
    titleInput.value = "";
    authorInput.value="";
    pagesInput.value="";
})


updateTable()
for(i = 0; i < Books.length; i++){
    console.log(Books[i].info());
}
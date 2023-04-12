// const bodyElement = document.querySelector('body')

// function myFunction(){
//     console.log("hello")
// }

// bodyElement.addEventListener("click", myFunction()) //doesn't work
//bodyElement.addEventListener("click", () => myFunction())
// bodyElement.addEventListener("click", myFunction)


//function invocation
renderHeader()
renderFooter()
bookStore.inventory.forEach(renderBook)

function priceFormatter(price) {
  let formattedPrice = Number(price).toFixed(2);
  return `$${formattedPrice}`;
}

// Renders Header
function renderHeader(){
    document.querySelector('h1').textContent = bookStore.name;
}
// Renders Footer
function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
}

// function: renderBook(book)
// --------------------------
// accepts a book object as an argument and creates
// an li something like this:
// <li class="list-li">
//   <h3>Eloquent JavaScript</h3>
//   <p>Marjin Haverbeke</p>
//   <p>$10.00</p>
//   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
// </li>
// appends the li to the ul#book-list in the DOM
function renderBook(book) {
    
    const li = document.createElement('li');
    li.className = 'list-li';
    
    const h3 = document.createElement('h3');
    h3.textContent = book.title;

    const pAuthor = document.createElement('p');
    pAuthor.textContent = book.author;
    
    const pPrice = document.createElement('p');
    pPrice.textContent = `$${book.price}`;
    
    const img = document.createElement('img');
    img.src = book.imageUrl;
    img.alt = `${book.title} cover`;
;
    const btn = document.createElement('button');

    btn.textContent = 'Delete';

    btn.addEventListener('click', () => li.remove())

    li.append(h3,pAuthor,pPrice,img,btn);
    document.querySelector('#book-list').append(li);
}

const form = document.querySelector("form")
//form.addEventListener("submit", handleForm)
form.addEventListener("submit", (event) => handleForm(event))

//handle form submission
function handleForm(event){
    event.preventDefault()

    // {
    //     id:1,
    //     title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    //     author: 'Marjin Haverbeke',
    //     price: 10.00,
    //     reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    //     inventory: 10,
    //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    //   }

    // console.log(event.target.title.value)
    // console.log(event.target.author.value)
    // console.log(event.target.price.value)
    // console.log(event.target.imageUrl.value)
    // console.log(event.target.inventory.value)

    const newBook = {
        id: bookStore.inventory.length + 1,
        title : event.target.title.value,
        author: event.target.author.value,
        price: event.target.price.value,
        reviews: [],
        imageUrl: event.target.imageUrl.value, 
        inventory: event.target.inventory.value
    }

    bookStore.inventory.push(newBook)
    renderBook(newBook)

}
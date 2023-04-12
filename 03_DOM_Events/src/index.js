
// const bodyElement = document.querySelector('body'); //select the whole body 

// function myFunction(){ //inner function/callback function
//     console.log("hello")
// }

// bodyElement.addEventListener("click", () => myFunction())
// //event target // method // event type //callback func 

// //bodyElement.addEventListener("click", myFunction) //short cut 
// //bodyElement.addEventListener("click", myFunction()) //=> doesn't work


//function invocation
renderHeader()
renderFooter()
bookStore.inventory.forEach(renderBook)

// format price
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

// appends the li to the ul#book-list in the DOM
function renderBook(book) {
    
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const pAuthor = document.createElement('p');
    const pPrice = document.createElement('p');
    const img = document.createElement('img');
    const btn = document.createElement('button');

    li.className = 'list-li';
    
    h3.textContent = book.title;
    pAuthor.textContent = book.author;
    pPrice.textContent = `$${book.price}`;
    img.src = book.imageUrl;
    img.alt = `${book.title} cover`;
    btn.textContent = 'Delete';

    //event target // method // event type //callback func 

    btn.addEventListener("click", (event) => console.log(event.target.parentNode.remove()))


    //btn.addEventListener("click", () => li.remove())

    li.append(h3,pAuthor,pPrice,img,btn);
    document.querySelector('#book-list').append(li);
}
//BookStore has been moved to data.js 
//console.log(bookStore.name)

//1.target element using query selector 
//2. Identify them
//3. populate them with content 

//add function to generate header 
    // name: 'Easley\'s Technical Books'
    // location: "Seattle",
    // number: 9999999999,

    // document.querySelector('.className')
    // document.querySelector('#id')

    function renderHeader(){
        //console.log(document.querySelector('h1'))
        //identify the correct element using the query selector

        document.querySelector('#name').textContent = bookStore.name
        document.querySelector('#location').textContent = bookStore.address
        document.querySelector('#number').textContent = bookStore.number

        // console.log(document.getElementsByTagName('h2'))
        // console.log(document.querySelectorAll('div'))
        //gives us array result 
        //our preferred method is using 'query selector'
    }



//add function to generate footer
    // name: 'Easley\'s Technical Books'
    // location: "Seattle",
    // number: 9999999999,

    function renderFooter(){
       const footerDivs = document.querySelectorAll('footer div')
       const bookStoreValues = [bookStore.name, bookStore.location, bookStore.number]

      //  footerDivs[0].textContent = bookStore.name
      //  footerDivs[1].textContent = bookStore.location
      //  footerDivs[2].textContent = bookStore.number

       footerDivs.forEach((footerDiv, index, array) => {
        footerDivs[index].textContent = bookStoreValues[index]
       })
    }


//add function to generate book cards
    //title
    //author
    //price
    //imageUrl

// bookStore.inventory.forEach(book => {
//   //1. Create DOM elements
//       //1 li element
//       //1 h3 element, 2 p element, 1 img element, 1 btn element

//       const parentList = document.querySelector('#book-list')
      
//       const bookCard = document.createElement('li')

//       const title = document.createElement('h3')
//       const author = document.createElement('p')
//       const price = document.createElement('p')
//       const img = document.createElement('img')
//       const button = document.createElement('button')

//   //2. Populate the DOM elements with appropriate content
//   title.textContent = book.title
//   author.textContent = book.author
//   price.textContent = book.price
//   img.src = book.imageUrl
//   button.textContent = 'Delete' //this btn will be the same

//   bookCard.className = "list-li" //matching with the CSS

//   //3. Wrap / Append these to One another
//   bookCard.append(title, author, price, img, button)
//   parentList.append(bookCard)
// })

//inner / callback function
function renderCard(book){
      const parentList = document.querySelector('#book-list')     
      const bookCard = document.createElement('li')

      const title = document.createElement('h3')
      const author = document.createElement('p')
      const price = document.createElement('p')
      const img = document.createElement('img')
      const button = document.createElement('button')

    //2. Populate the DOM elements with appropriate content
    title.textContent = book.title
    author.textContent = book.author
    price.textContent = book.price
    img.src = book.imageUrl
    button.textContent = 'Delete' //this btn will be the same

    bookCard.className = "list-li" //matching with the CSS

    //3. Wrap / Append these to One another
    bookCard.append(title, author, price, img, button)
    parentList.append(bookCard)
}


renderHeader()
renderFooter()
//bookStore.inventory.forEach(renderCard) //renderCard is a callback function

//bookStore.inventory.forEach(renderCard)
bookStore.inventory.forEach(book => renderCard(book))
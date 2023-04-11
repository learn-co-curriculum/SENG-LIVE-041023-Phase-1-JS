//console.log(bookStore)

// 1. select dom
// 2. add content to the dom



// add Function to generate header 
  //  name: 'Easley\'s Technical Books',
  //  location: "Seattle",
  //  number: 9999999999,

  function renderHeader(){
      document.querySelector('#name').textContent = bookStore.name
      document.querySelector('#location').textContent = bookStore.location
      document.querySelector('#number').textContent = bookStore.number
  }



// add Function to generate footer
  //  name: 'Easley\'s Technical Books',
  //  location: "Seattle",
  //  number: 9999999999,
function renderFooter(){
  const footerDivs = document.querySelectorAll('footer div')
  const bookStoreValues = [bookStore.name, bookStore.location, bookStore.number ]
  // footerDivs[0].textContent = bookStore.name
  // footerDivs[1].textContent = bookStore.location
  // footerDivs[2].textContent = bookStore.number

  footerDivs.forEach((footerDiv, index) => {
    footerDivs[index].textContent = bookStoreValues[index]
  })
}




// add Function to generate book cards
    //title
    //author
    //price
    //imageUrl

    // bookStore.inventory.forEach(book => {
    //   //console.log(book)

    //   //1. Create DOM elements
    //       //1 li element => container
    //       //1 h3 element, 2 p elements, 1 img element, 1 btn element
    //       const parentList = document.querySelector('#book-list')
    //       const bookCard = document.createElement('li')

    //       const title = document.createElement('h3')
    //       const author = document.createElement('p')
    //       const price = document.createElement('p')
    //       const img = document.createElement('img')
    //       const button = document.createElement('button')


    //   // 2. Populate DOM elements with Appropriate context
    //       title.textContent = book.title
    //       author.textContent = book.author
    //       price.textContent = book.price
    //       img.src = book.imageUrl
    //       button.textContent = 'Delete'

    //       bookCard.className = 'list-li'


    //   // 3. Wrap / Append these to One another
    //     bookCard.append(title, author, price, img, button)
    //     parentList.append(bookCard)
    // })

    const renderCard = book => {
          const parentList = document.querySelector('#book-list')
          const bookCard = document.createElement('li')

          const title = document.createElement('h3')
          const author = document.createElement('p')
          const price = document.createElement('p')
          const img = document.createElement('img')
          const button = document.createElement('button')


      // 2. Populate DOM elements with Appropriate context
          title.textContent = book.title
          author.textContent = book.author
          price.textContent = book.price
          img.src = book.imageUrl
          button.textContent = 'Delete'

          bookCard.className = 'list-li'


      // 3. Wrap / Append these to One another
        bookCard.append(title, author, price, img, button)
        parentList.append(bookCard)
    }


    renderHeader()
    renderFooter()
//    bookStore.inventory.forEach(renderCard) //renderCard as a callback function
    //bookStore.inventory.forEach(renderCard()) //we are not invoking the callback function now bc we don't have access to the title.

    bookStore.inventory.forEach(book => renderCard(book))
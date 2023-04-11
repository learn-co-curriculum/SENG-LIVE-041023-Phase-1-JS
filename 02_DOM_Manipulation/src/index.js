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

    bookStore.inventory.forEach(book => {

    })


    renderHeader()
    renderFooter()
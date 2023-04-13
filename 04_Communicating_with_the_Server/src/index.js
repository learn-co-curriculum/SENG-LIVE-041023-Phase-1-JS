document.addEventListener('DOMContentLoaded', () => {

    const p = Promise.reject('CONTENT')

    p.then(value => {
        console.log(`YESSSS SUCCESS! ${value}` )
    }).catch(err => {
        console.error(`NO ERROR :-( ${err})`)
    })

    //3 states of promise: (box)
        //statuses: pending, fulfilled, rejected
        //contents: what's returned / passed on once the promise is resolved 

    fetch("http://localhost:3000/stores/")
        .then(resp => resp.json()) //this case it was fulfilled(resolved)
        .then(data => console.log(data))
        .catch(err => console.error(err))

    // Render Functions
    // Renders Header
    function renderHeader(store){
        document.querySelector('h1').textContent = store.name
    }
    // Renders Footer
    function renderFooter(store){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = store.name
        footerDivs[1].textContent = store.address
        footerDivs[2].textContent = store.hours
    }

    function renderBookCard(cardData) {
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')

        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        btn.textContent = 'Delete'

        img.src = cardData.imageUrl
        li.className = 'list-li'

        //Event Listeners 
        btn.addEventListener('click',()=>li.remove())
    
        li.append(h3,pAuthor,pPrice,img,btn)
        document.querySelector('#book-list').append(li)
    }

// Event handlers 
    function handleForm(e){
        e.preventDefault()
        //Builds Book
        const book = {
            title: e.target.title.value,
            author:e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory:e.target.inventory.value,
            reviews:[]
        }
        renderBookCard(book)
    }

//Invoking functions
    renderHeader(bookStore)
    renderFooter(bookStore)
    bookStore.inventory.forEach(renderBookCard)
    document.querySelector('#book-form').addEventListener('submit', handleForm)


})
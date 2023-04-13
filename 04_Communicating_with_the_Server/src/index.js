document.addEventListener('DOMContentLoaded', () => {

    // console.log("before fetch")
    // fetch("http://localhost:3000/stores") //endpoint
    //     .then(resp => resp.json()) //parsing it from JSON to JS 
    //     .then((data) => console.log(data))
    //     .catch(err=> console.error(err))
    //     //JSON : JS object notation 
    //     //JSON is not vanilla JS object


    // // console.log("after fetch")

    // fetch("http://localhost:3000/stores")
    //     .then(resp => resp.json()) //promise
    //     .then((data) => console.log(data)) //rendering the data


    //handle GET requests
    function handleRequest(url){ //promise
        return fetch(url)
        .then(resp => resp.json())
    }

    //render response data => stores
    // handleRequest("http://localhost:3000/stores/1") //endpoint
    //     .then(store => {
    //         renderHeader(store)
    //         renderFooter(store)
    //     })
    //     .catch(console.error)

    //render response data => books
    // handleRequest("http://localhost:3000/books")
    //     .then(books => { //array 
    //                 console.log(books)
    //                 books.forEach((book) => { //object
    //                     console.log(book)
    //                     renderBookCard(book) //takes in an abj as an argument
    //                 })
    //             }) 

    //render response data => books
    handleRequest("http://localhost:3000/books")
        .then(books => books.forEach(renderBookCard)) 

    //render response data => stores
    handleRequest("http://localhost:3000/stores/")
        .then(stores => stores.forEach(renderStoreCard))
        .catch(err => console.error(err))


    const storeContainer = document.querySelector("#stores")
    //render store card
    function renderStoreCard(store) {
        //1 .create necessary elements
        const storeCard = document.createElement('li')
        const storeName = document.createElement('h3')
        const storeLocation = document.createElement('p')
        const storeHours = document.createElement('p')


        //2. populate elements with appropriate content
        console.log(store)
        storeName.textContent = store.name
        storeLocation.textContent = store.location
        storeHours.textContent = store.hours

        storeCard.className = 'list-li'
        

        //3. append to the DOM as necessary
        storeCard.append(storeName, storeLocation, storeHours)
        storeContainer.append(storeCard)

        //4. add event handling behavior

        storeCard.addEventListener("click", () => {
            handleRequest(`http://localhost:3000/stores/${store.id}`)
                .then((store) => {
                    renderHeader(store)
                    renderFooter(store)
                })})
    }



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
    //renderHeader(bookStore) //data.js
    //renderFooter(bookStore)
    //bookStore.inventory.forEach(renderBookCard)
    document.querySelector('#book-form').addEventListener('submit', handleForm)


})
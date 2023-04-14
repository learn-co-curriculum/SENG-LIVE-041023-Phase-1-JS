document.addEventListener('DOMContentLoaded', () => {

/////////////////////////////
// Fetch requests 
    // Function for making a GET request 
    function fetchResource(url){ //store or book
        return fetch(`http://localhost:3000${url}`)
                    .then(res => res.json()) //returns a promise
                    //JSON obj => JS obj
    }


    //POST request
    function createResources(url, body){
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json' //we are sending a json object
            },
            body: JSON.stringify(body) //the body is book JS object, which is being turned into JSON obj //JS obj => JSON obj
            })
        .then(res => res.json()) // 1st .then method returning a promise
    }


/////////////////////////////
// Rendering functions
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


/////////////////////////////
// Event Handlers
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
        //optimistic rendering
        // renderBookCard(book)


        //post book invocation function 
        createResources("http://localhost:3000/books", book) //postBook invocation, which is the 1st .then() method returning a promise
            .then(renderBookCard) //2nd .then() method / console log the data
            .catch(err => {
                console.log(err)
                removeBookCard(book)
            })

    }


/////////////////////////////
// Invoking functions    
    //initial store render 
    fetchResource('/stores/1') //1st .then() returns a promise
    .then(store => { //2nd .then()
        renderHeader(store)//rendering the data
        renderFooter(store)
    })
    .catch(e => console.error(e))

    //render response data => book
    fetchResource('/books')
    .then(books => books.forEach(renderBookCard))
    .catch(e => console.error(e))

    document.querySelector('#book-form').addEventListener('submit', handleForm)

})
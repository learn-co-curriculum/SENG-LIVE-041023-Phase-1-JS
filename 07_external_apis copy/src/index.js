console.log("hello")
console.log(apiKEY)
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(res => res.json())
.then(data =>  {
    //debugger
    console.log(data)
})


document.addEventListener('DOMContentLoaded', () => {
    // Fetch requests 
        // Function for making a GET request 
        function fetchResource(url){
            return fetch(url)
            .then(res => res.json())
        }

        function createResources(url, body){
            return fetch(url,{
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => res.json())
        }

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
            createResources('http://localhost:3000/books', book)
            .then(renderBookCard)
            .catch(e => console.error(e))

        }

        function handleRenderSearch(){
            document.querySelector('main').innerHTML = `
            <form id="api-Search">
                <label>API Search<label>
                <input type="text" id="search" name="search"></input>
                <input type="submit"></input>
            </form>
            `
            document.querySelector('#api-search').addEventListener('submit', handleAPIQuery)
        }

        //Handles Google Books API search
        function handleAPIQuery(e){
            e.preventDefault()
           // console.log(e.target.search.value)
            // console.log(document.querySelector('#search').value)
            const search = e.target.search.value
            
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20&key=${apiKEY}`)
                .then(response => response.json())
                .then(data  => data.items.map(item  => renderResultCard(item.volumeInfo)))
                .catch(console.error)
        }

        function renderResultCard(itemInfo){
            //console.log("GOT IT !!!", itemInfo)

            //create an article HTML element as a parent container
            const bookCard = document.createElement("article")




            //h2, two p, img
            const bookTitle = document.createElement("h2")
            const bookAuthor = document.createElement("p")
            const bookDescription = document.createElement("p")
            const bookImage = document.createElement("img")
            

            //add content using the .textContent()
            bookTitle.textContent = itemInfo.title
            itemInfo.authors? bookAuthor.textContent = itemInfo.authors.join(' and ') : null

            // console.log(itemInfo.authors.join(' and '))
            // console.log(itemInfo.authors)

            bookDescription.textContent = itemInfo.description
            itemInfo.imageLinks? bookImage.src = itemInfo.imageLinks.smallThumbnail : null

            bookCard.className = "search-list"


            //wrap elements together into 'article'element before appending it to <main>
            bookCard.append(bookTitle, bookAuthor, bookDescription, bookImage)

            document.querySelector('main').append(bookCard)
        }
  


    
    // Invoking functions    
        fetchResource('http://localhost:3000/stores/1')
        .then(store => {
            renderHeader(store)
            renderFooter(store)
        })
        .catch(e => console.error(e))
    
        fetchResource('http://localhost:3000/books')
            .then(books => books.forEach(renderBookCard))
            .catch(e => console.error(e))
    
        document.querySelector('#book-form').addEventListener('submit', handleForm)
        document.querySelector('#nav-search').addEventListener('click', handleRenderSearch)

})
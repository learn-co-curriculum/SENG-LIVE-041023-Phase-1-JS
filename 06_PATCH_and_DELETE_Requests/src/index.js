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

        function updateResources(url, body){
            return fetch(url,{
                method: 'PATCH', 
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
            const pInventory = document.createElement('input')
    
            h3.textContent = cardData.title
            pAuthor.textContent = cardData.author
            pPrice.textContent = `$${cardData.price}`
            pInventory.type = 'number' //new
            pInventory.value = cardData.inventory //new
            btn.textContent = 'Delete'
    
            img.src = cardData.imageUrl
            li.className = 'list-li'
    
            //Event Listeners 
            btn.addEventListener('click',()=>li.remove())

            pInventory.addEventListener('change', (e) => {
                updateResources(`http://localhost:3000/books/${cardData.id}`, {inventory: e.target.value})
            })
        
            li.append(h3,pAuthor,pPrice, pInventory, img,btn)
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
})
//CRUD   // HTTP verb

//CREATE //POST

//READ   //GET

//UPDATE  //PATCH/PUT

//DELETE //DELETE

document.addEventListener('DOMContentLoaded', () => {
    // Fetch requests 
        // GET request 
        function fetchResource(url){
            return fetch(url)
            .then(res => res.json())
        }

        // POST request
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

        //PATCH request
        function updateResources(url, body){
            return fetch(url,{
                method: 'PATCH', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body), //JS obj -> JSON obj
            })
            .then(res => res.json()) //JSON obj => JS obj
        }

        //DELETE request
        function deleteResource(url){
            return fetch(url, {
                method: 'DELETE'
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
    
        //renders book card
        function renderBookCard(cardData) {
            const li = document.createElement('li')
            const h3 = document.createElement('h3')
            const pAuthor = document.createElement('p')
            const pPrice = document.createElement('p')
            const pInventory = document.createElement('input')
            const img = document.createElement('img')
            const btn = document.createElement('button')
    
            h3.textContent = cardData.title
            pAuthor.textContent = cardData.author
            pInventory.type = 'number'
            pInventory.value = cardData.inventory
            pPrice.textContent = `$${cardData.price}`
            btn.textContent = 'Delete'

            img.src = cardData.imageUrl
            li.className = 'list-li'

           
    
            //Event Listeners 
                //delete
                //optimistic rendering -> pessimistic rendering
                btn.addEventListener('click', (e) => {
                   handleDelete(cardData.id, e.target.parentElement)
                })

                //patch 
                pInventory.addEventListener("change", (e) =>  handlePatch(e, cardData))
        
            li.append(h3,pAuthor,pPrice,pInventory, img,btn)
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
        //GET
        fetchResource('http://localhost:3000/stores/1')
        .then(store => {
            renderHeader(store)
            renderFooter(store)
        })
        .catch(e => console.error(e))
    
        //GET
        fetchResource('http://localhost:3000/books')
        .then(books => books.forEach(renderBookCard))
        .catch(e => console.error(e))

        //PATCH
        function handlePatch(e, cardData){
            e.preventDefault()
            updateResources(`http://localhost:3000/books/${cardData.id}`
            , {inventory: e.target.value}) //
            .then(data => console.log(data))
            .catch(console.error)
        }

        //DELETE
        function handleDelete(id, target){
            deleteResource(`http://localhost:3000/books/${id}`) //invoking the delete fetch request
                .then(() => target.remove())
                .catch(console.error)
        }
       
    
        document.querySelector('#book-form').addEventListener('submit', handleForm)
    
})
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

       footerDivs[0].textContent = bookStore.name
       footerDivs[1].textContent = bookStore.location
       footerDivs[2].textContent = bookStore.number
    }


//add function to generate book cards
    //title
    //author
    //price
    //imageUrl




renderHeader()
renderFooter()
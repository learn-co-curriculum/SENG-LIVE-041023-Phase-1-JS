//Data 
const inventory = [
  {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.00,
    reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    inventory: 10,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 2,
    title: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    price: 45.75,
    reviews: [{userID: 15, content:'good way to learn JQuery'}],
    inventory: 2,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 36.00,
    reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
    inventory: 8,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 4,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 25.50,
    reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
    inventory: 0,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
  },
  {
    id: 5,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 6.00,
    reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
    inventory: 7,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
    id: 6,
    title: 'Learn Enough JavaScript to Be Dangerous',
    author: 'Michael Hartl',
    price: 24.00,
    reviews: [{userID: 50, content:'pretty good'}],
    inventory: 5,
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'
  },
  {
    id: 7,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    price: 49.95,
    reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID: 20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
    inventory: 20,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
  }
]

// ✅ Function ideas:
/*
- helloWorld
- formatPrice(price)
- blurb(book)
*/

// Start here!

// function runIceCreamMachine(param1, param2){
//   return ` ${param1}, ${param2} ice cream`
// }

// runIceCreamMachine("arg1", "arg2")//invocation using argument



//create a formatPrice(price) function that accepts a price(number) as an argument and returns the price formatted as a string

//formatPrice(10) => $10.00

// function formatPrice(price){ //number
//   //return "$" + Number.parseFloat(price).toFixed(2)
//   //return  "$" + Number.parseFloat(`${price}`).toFixed(2)
//   return `hello this will be this price $${Number.parseFloat(price).toFixed(2)}`
// }

// console.log(formatPrice(10.34))






// ✅ create a blurb() function that accepts a book as an argument and logs a message in the following format:
// 'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'


// const book = inventory[2]


// function blurb(book){
//   console.log(book.author)
//   const title = book.title
//   const author = book.author
//   const price = `$${book.price}.00`
//   return `${title} by ${author} is on sale for ${price}`
// }

// console.log(blurb(book))



// const arr1 = [1, 2, 3, {}, "str", {
//   keyname: "value",
//   id: 1,
//   title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//   author: 'Marjin Haverbeke',
//   price: 10.00,
//   reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
//   inventory: 10,
//   imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
// }]

// console.log(arr1)


//let highestPricedBook; //declaring a var

//console.log(highestPricedBook)

// function findHighestPricedBook(inventoryParam){
//   let highestPricedBook = inventoryParam[0] //assigning the var
//   for (let i=1; i < inventoryParam.length; i++){
//     const highestPrice = highestPricedBook.price
//     console.log(highestPrice)
//     const currentBook = inventoryParam[i]
//     console.log(currentBook)
//     if(currentBook.price > highestPrice){
//       highestPricedBook = currentBook; //re-assigned highest priced book with the current book
//     }
//   }
//   return highestPricedBook
// }

// console.log(findHighestPricedBook(inventory))

// 💡 Arrow functions vs regular functions

//function declaration
// function sum (a, b){
//   return a + b
// }


//arrow function 
// const sum = (a, b) => a + b //implicit return
// const result = sum(3, 7) 
// console.log(result)


// const sayHello = str => { //explicit return 
//   return str
// }
// console.log(sayHello("hello"))

// let displayA = a => alert(`this is ${a}`)
// console.log(displayA("A"))

// let sayHi = () => alert("hello!")
// console.log(sayHi())


//function expression
// let sum = function (a, b){
//   return a + b
// }

// const result = sum(1, 3)
// console.log(result)


// let result = []
// for(let i = 0; i < inventory.length; i++){
//   const price = inventory[i].price
//   result.push(price)
// }
// console.log(result)


///// .forEach() /////////////////////////////
// 1 .forEach() with CB arrow function 
// const prices = inventory.forEach(book => console.log(book.price))

// // 2 .forEach() with CB function declaration written inside of the outer function
// const prices = inventory.forEach(function inner(book){
//   console.log(book.price)
// })

// // 3 .forEach() with CB inner function declaration as call back function 
// // inner function (CB)
// function inner(book){
//   console.log(book.price)
// }
// //outer function (HoF)
// const prices = inventory.forEach(inner)
// console.log(prices)



/////.map()/////////////////////////////
//1
// const prices = inventory.map(book => book.price)
// console.log(prices)

//2
// const prices = inventory.map(function callback(book){
//   return book.price
// })

//3
// function callback(book){
//   return book.price
// }
// const prices = inventory.map(callback)
// console.log(prices)

// ✅ create an arrow function version of the formatPrice function


// 💡 Difference between Block scope, Function scope, and Global scope

// ✅ create a variable `highestPricedBook`



// ✅ create a function `findHighestPricedBook` that finds that book and returns it


// ✅ Create a function called `log` that takes a function and its argument as arguments
// and logs a message explaining the name of the function, the argument passed and 
// the return value 

// 💡 Practice using callbacks for iteration



// ✅ Create an array of the prices of all of the books



// ✅ Create an array of simplified book objects



// ✅ Create an array of strings from the inventory in the following format:
// 'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'


// 💡 When do I use forEach vs map?
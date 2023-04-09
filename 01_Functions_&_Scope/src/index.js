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
  },
  {
    id: 8,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    price: 499.95,
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

/////////////////////////////////////////////////////
/////////////    function hello(){}   ///////////////
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/////////////    1    ///////////////////////////////
/////////////////////////////////////////////////////
// function hello(param1, param2){
//   return `hello world ${param1} + ${param2}`
// }
// hello("arg1", "arg2")

// // -----> in the google developer console
// hello("1","2")         ////invoking
// 'hello world 1 + 2'    ////return value



////////////////////////////////////////////////////
/////////////   2    ///////////////////////////////
////////////////////////////////////////////////////
// function hello(param1, param2){
//  console.log(`hello world ${param1} + ${param2}`)
// }
// hello("arg1", "arg2")

// //-----> in the google developer console
// hello world arg1 + arg2 //hello function being invoked on line 93, console logging line 91.
// hello("1","2")          ////invoking
// hello world 1 + 2       //// console logging
// undefined               //// returning undefined because there was no return statement



///////////////////////////////////////////////////////
/////////////   null vs undefined    //////////////////
///////////////////////////////////////////////////////

//null: it's an empty value. but someone actually assigned it as null.
//undefined: it's a value that has not been assigned yet.


////////////////////////////////////////////////////
/////////////   3    ///////////////////////////////
////////////////////////////////////////////////////
// function hello(param1, param2){
//  return `hello world ${param1} + ${param2}`
// }
// console.log(hello("arg1", "arg2"))

// //-----> in the google developer console
// hello world arg1 + arg2     //hello function is being invoked on line 120, and being console logged. 


////////////////////////////////////////////////////
/////////////   4    ///////////////////////////////
////////////////////////////////////////////////////
// function hello(param1, param2){
//  return `hello world ${param1} + ${param2}`
// }
// const printHello = hello("arg1", "arg2")
// console.log(printHello)

// //-----> in the google developer console
// hello world arg1 + arg2     //hello function is being invoked on line 132, being saved in a variable then being console logged on the line 133.


/////////////////////////////////////////////////////
/////////////    formatPrice(price)    ///////////////////////////////
/////////////////////////////////////////////////////

//create a formatPrice(price) function that accepts a price(number) as an argument and returns the price formatted as a String.
//formatPrice(price) => $10.00

/////////////////////////////////////////////////////
/////////////    1    ///////////////////////////////
/////////////////////////////////////////////////////

// function formatPrice(price){
// }
// console.log("formatPrice(10)", formatPrice(10)) 
// //formatPrice(10) undefined

// 1. invoke the function
// 2. console.log the function so we can see it
// 3. go to browser and point at the console, which is "undefined"
// 4. Ask yourself which datatype you are working with. 
// 5. go to MDN number
// 6. We will see all the built in JS data types, one of them is number.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// 7. (Number.MAX_VALUE, ...) properties: values, stored on the object.
// 8. (Number.parseFloat(), ...) methods: functions that are stored on the object
// 9. (Number.prototype.toFixed()) .prototype: means, if you work with the actual number, then you can call the `.toFixed()` method. It's callable on any examples.

/////////////////////////////////////////////////////
/////////////    2    ///////////////////////////////
/////////////////////////////////////////////////////

// function formatPrice(price){
//   return Number.parseFloat(price).toFixed(2)
// }
// console.log("formatPrice(10)", formatPrice(10))
// //formatPrice(10) 10.00


/////////////////////////////////////////////////////
/////////////    3    ///////////////////////////////
/////////////////////////////////////////////////////

// 1. string interpolation with backticks

// function formatPrice(price){
//   return `$${Number.parseFloat(price).toFixed(2)}`
// }
// console.log("formatPrice(10)", formatPrice(10))
// //formatPrice(10) $10.00


/////////////////////////////////////////////////////
/////////////   4    ///////////////////////////////
/////////////////////////////////////////////////////

// //1. concatenation, adding a string 
// function formatPrice(price){
//   return "$" + Number.parseFloat(price).toFixed(2)
// }
// console.log("formatPrice(10)", formatPrice(10))
// //formatPrice(10) $10.00



// ✅ create a blurb() function that accepts a book as an argument and logs a message in the following format:
// 'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'

// const book = inventory[0]

// function blurb(book){
//   const title = book.title
//   const author = book.author
//   const price = `$${book.price}.00`
//   return `${title} by ${author} is on sale for ${price}`
// }

// console.log(blurb(inventory[0]))


/////////////////////////////////////////////////////
/////////////  SCOPE   ///////////////////////////////
/////////////////////////////////////////////////////

// 💡 Difference between Block scope, Function scope, and Global scope

// ✅ create a variable `highestPricedBook`
// let highestPricedBook ;


// // ✅ create a function `findHighestPricedBook` that finds that book and returns it
// function findHighestPricedBook(inventoryParam) {
//   highestPricedBook = inventoryParam[0]  
//   for (let i = 1; i < inventoryParam.length; i++) {
//     const highestPrice = highestPricedBook.price
//     const currentBook = inventoryParam[i]
//       if (currentBook.price > highestPrice) {
//         highestPricedBook = currentBook; //re-assign highestPricedBook to currentBook
//       }
//     }
//   return highestPricedBook;
// }
// console.log("highestPricedBook---A", highestPricedBook)
// findHighestPricedBook(inventory)
// console.log("highestPricedBook---B", highestPricedBook)


/////////////////////////////////////////////////////
/////////////  💡 Arrow functions vs regular functions    ///////////////////////////////
/////////////////////////////////////////////////////

//function declaration:
// function sayHello(str){
//   return `function declaration ${str}`
// }
// console.log(sayHello("Lena"))


// //arrow function:

//const sayHello = (str) => str //implied return so no need return keyword

//  const sayHello = (str) => { 
//   return str 
// } //explicit return
// console.log(sayHello("Lena"))


// //function expression:
// const sayHello = function (str){
//   return `function expression ${str}`
// }

// console.log(sayHello("studying makes me feel good"))

// let sayHi = () => alert("Hello!");
// sayHi()


// // Function Expression

// let sum = function(a, b) {
//   return a + b;
// };
// console.log("hello", result)
// const result = sum(1, 3) // calling the function



// hoisting 
//JS will bring function(with keyword, not the arrow function) to the top of the scope.
// console.log(sayHello("Lena"))

// function sayHello(str){
//   return `function declaration ${str}`
// }

// console.log(sayHello("Lena"))

// const sayHello = (str) => `hello ${str}`





// ✅ Create a function called `log` that takes a function and its argument as arguments
// and logs a message explaining the name of the function, the argument passed and 
// the return value 

// 💡 Practice using callbacks for iteration



// ✅ Create an array of the prices of all of the books

////for loop
// let result = []
// for(let i = 0 ; i < inventory.length; i++){
//   const price = inventory[i].price;
//   result.push(price)
// }
// console.log(result)




////.forEach()
////////////////anonymous////////
// const prices = inventory.forEach(book => book.price)
// console.log(prices) //undefined

// const prices = inventory.forEach((book, b, c)  => {
//   console.log(book.price, b, "c")})


////////////////inner/outer forEach////////
// function inner(book){
//   console.log(book.price)
// }
// const prices = inventory.forEach(inner)




/////.map()
// const prices = inventory.map(book => book.price)
// console.log(prices) //[10, 45.75, 36, 25.5, 6, 24, 49.95, 499.95]
function callback(book){
  return book.price
}
const prices = inventory.map(callback)


console.log(prices)//[10, 45.75, 36, 25.5, 6, 24, 49.95, 499.95]



// ✅ Create an array of simplified book objects




// 💡 When do I use forEach vs map?


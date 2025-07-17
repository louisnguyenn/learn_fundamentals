// console.log("Hello")
// console.log("I like pizza")

// window.alert(`This is a alert!`);
// window.alert(`I like pizza!`);

// document.getElementById("header").textContent = `Hello`;
// document.getElementById("paragraph").textContent = `I like pizza`;

// let x = 123;
// let age = 19;
// let price = 10.99;

// console.log(typeof price)
// console.log(x)
// console.log(age)
// console.log(price)
// console.log(`Your age is ${age} and the price is $${price}`);

// let firstName = "Louis Nguyen";
// let food = "pizza";

// console.log(typeof firstName);
// console.log(firstName);
// console.log(`Your first name: ${firstName}`);
// console.log(food);
// console.log(`You, ${firstName}, like ${food}`);

// let online = false;
// let sale = true;

// console.log(typeof online)
// console.log(`Louis is online: ${online}`)
// console.log(`Is this car for sale: ${sale}`)

// let name = "Louis Nguyen"
// let age = 19;
// let student = true;

// document.getElementById("paragraph1").textContent = `Your name is ${name}`;
// document.getElementById("paragraph2").textContent = `You are ${age} years old`;
// document.getElementById("paragraph3").textContent = `You are a current student: ${student}`;

// user input
// let username;

// // window prompt
// // username = window.prompt("What's your username?");

// console.log(username)

// document.getElementById("submit").onclick = () => {
//     username = document.getElementById("text").value;
//     // console.log(username);
//     document.getElementById("header1").textContent = `Hello ${username}`;
// }

// const myCheckbox = document.getElementById("myCheckbox");
// const visaButton = document.getElementById("visaButton");
// const mastercardButton = document.getElementById("mastercardButton");
// const PayPalButton = document.getElementById("PayPalButton");
// const submitButton = document.getElementById("submitButton");
// const result = document.getElementById("result");
// const paymentResult = document.getElementById("paymentResult");

// submitButton.onclick = () => {
//     if (myCheckbox.checked === true) {
//         result.textContent = `You are subscribed`;
//     }

//     else {
//         result.textContent = `You are not subscribed`;
//     }

//     if (visaButton.checked === true) {
//         paymentResult.textContent = `You are paying with Visa`;
//     }

//     else if (mastercardButton.checked === true) {
//         paymentResult.textContent = `You are paying with Mastercard`;
//     }

//     else if (PayPalButton.checked === true) {
//         paymentResult.textContent = `You are paying with PayPal`;
//     }

//     else {
//         paymentResult.textContent = `You must select a payment type`;
//     }
// }

// hello = (callback) => {
//     console.log("Hello!");
//     callback();
// }

// goodbye = () => {
//     console.log("Goodbye!");
// }

// leave = () => {
//     console.log("Leave!");
// }

// hello(goodbye);

// sum = (callback, x, y) => {
//     let result = x + y;
//     callback(result);
// }

// displayConsole = (result) => {
//     console.log(result);
// }

// displayPage = (result) => {
//     document.getElementById("header").textContent = result;
// }

// sum(displayPage, 1, 2);

// 3 types of functions

// function Hello(){
// }

// const function = Hello(){
// }

// hello = () => {
// }

// setTimeout(hello = (name) => {
//     console.log(`Hello ${name}`);
// }, 3000);

// hello("Louis");

// const num = [1, 2, 3, 4, 5];

// const square = num.map((e) =>
//     Math.pow(e, 2));

// console.log(square);

// objects
/* object = {key:value,
            function()}
*/

// const person1 = {
//     firstName: "Louis",
//     lastName: "Nguyen",
//     age: 19,
//     Employed: true,
//     // sayHello: function(){console.log("Hello!")},
//     sayHello: () => {console.log("Hello!")},
//     eat: () => {console.log("I'm eating Banh Mi")},

// }

// const person2 = {
//     firstName: "Kevin",
//     lastName: "Nguyen",
//     age: 21,
//     Employed: false,
//     sayHello: function(){console.log("Hello! I'm Kevin")},
//     eat: () => {console.log("I'm at Seaside Bakery")}
// }

// person1.sayHello();
// person2.sayHello();

// person1.eat();
// person2.eat();

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.Employed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.Employed);

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}`)
    }

    total(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.13;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 39.99);
const product3 = new Product("Underwear", 190.99);

product1.displayProduct();
const total = product1.total(salesTax);
console.log(`Total price with tax: $${total.toFixed(2)}`)

product2.displayProduct();
const total2 = product2.total(salesTax);
console.log(`Total price with tax: $${total2.toFixed(2)}`)

product3.displayProduct();
const total3 = product3.total(salesTax);
console.log(`Total price with tax: $${total3.toFixed(2)}`)

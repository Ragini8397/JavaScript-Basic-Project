let name = null;
let bignNums = null;
let address;

let outsideTempurature = null;

// console.log(name); // null
// console.log(address); // 
const bigNumber = 1234544869506384903n;

console.log(bigNumber); // 1234544869506384903n
console.log(typeof(bigNumber)); //

const id = Symbol("2345894");
const anotherId = Symbol("2345894");

console.log(typeof(anotherId)); // false

console.log(typeof (id)); // false

const heroes = ['Shaktiman','Ratan Tata','Father of nation']

let obj = {
    name: 'Ragini',
    age: 28,
    address: 'Bhopal Maydhay Pradesh',
    hobbies: ['Reading', 'Running', 'Cooking'],
    heroes,
    sayHello: function() {
        console.log('Hello');
    }
}

// console.log(typeof outsideTempurature); 
console.log(heroes);
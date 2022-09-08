// ======== Variables and Datatypes =========

// A. Q + A
// 1. we assign variables with const/let/var(out of date)(name of variable to be referenced) = (string, number, array, boolean, object)
// 2. you can only reassign let/var variables const can not be reassigned and they can only be assigned with (=) sign.
// 3. let/const = previous variable
// 4. declare is to set a value to a variable, assign is to set a datatype ot a variable, define
// 5. pseudocoding is putting code into readable text for some one to read.
// 6. that should be determined by you. If it was me, I use trial and error withing changing the code how can you confirm it works.

// B. Strings
// let firstVariable = "Hello World"
// console.log(firstVariable)
// firstVariable = 25
// console.log(firstVariable)
// let secondVariable = firstVariable
// console.log(secondVariable)
// secondVariable = "Medublaomblagoda"
// console.log(secondVariable)
// let yourName = "Maurice"
// console.log(`Hello, my name is ${yourName}`)

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

// console.log(a != b)
// console.log(c > d)
// console.log('Name' === 'Name')
// console.log(true !== false)
// console.log(false === false === false === false === false !== true)
// console.log(e === "Kevin")
// console.log(a < b < c)
// console.log(a * a === d )

// D. The Farm

const animal = "cow";
if (animal === "cow") {
  // console.log("mooooo")
} else {
  // console.log('Hey! You\'re not a cow.')
}

// E. Driver's Ed
let age = 25;
if (age >= 16) {
  // console.log("Here are the keys!")
} else if (age < 16) {
  // console.log("Sorry, you\'re too young.")
}

// ========= Loops =========
// A. The basics
for (let i = 0; i <= 10; i++) {
  // console.log(i)
}
for (let i = 10; i <= 400; i++) {
  // console.log(i)
}
for (let i = 12; i <= 400; i += 3) {
  // console.log(i)
}

// B. Get Even
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    // console.log(`${i} is an even number`)
  } else {
    // console.log(i)
  }
}

for (let i = 0; i < 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    // console.log(`I found a ${i}. Three is a crowd. I found a ${i} High five!`)
  } else if (i % 5 === 0) {
    // console.log(`I found a ${i} High five!`)
  } else if (i % 3 === 0) {
    // console.log(`I found a ${i}. Three is a crowd.`)
  }
}

// D. Savings Account
let bank_account = 0;
// for (let i = 0; i <= 10; i++){
//     bank_account += i
//     console.log(bank_account)
// }
for (let i = 0; i <= 100; i++) {
  bank_account += i;
  // console.log(bank_account)
}
bank_account *= 2;
// console.log(bank_account)

// ======= Arrays & Control Flow =======

// A. Talk about it
// 1. it is a set of datatypes
// 2. Always because there are in the order that you set them in unless it it changed
// 3. almost anything

// B. Easy does it

const quotes = [
  "Anything can happy!",
  " Live. Love. Laugh.",
  "Take life one day at a time",
];

// C. Accessing elements
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0])
// randomThings.splice(2,1, 'World')
// console.log(randomThings)

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(ourClass[2])
// ourClass.splice(4,1,'Octocat')
// ourClass.push("Cloud City")
// console.log(ourClass)

// E. Mix it up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Good Fun!");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.splice(4, 1);
myArray.reverse();
console.log(myArray);

// F. Biggie Smalls
// let integer = 0
// if (integer < 100){
//     console.log("s")
// }if (integer >= 100){
//     console.log("S")
// }

// G. Monkey in the Middle
// let middle = 7
// if (middle < 5){
//     console.log("little number")
// }else if ( middle > 10){
//     console.log("big number")
// }else{
//     console.log("monkey")
// }

// H. What's in Your Closet
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
//   console.log(`Kristyn is rocking that ${kristynsCloset[3]} today!`)
//   kristynsCloset.splice(6, 0, "raybans")
//   kristynsCloset.splice(5,1, "stained knit hat")
//   console.log(kristynsCloset)
//   console.log(`Thom is wearing a ${thomsCloset[0][2]}, a ${thomsCloset[1][2]}, and a ${thomsCloset[2][2]} `)
//   console.log(thomsCloset[0][2])
//   console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}`)
//   thomsCloset[1].splice(2,1,"footie Pajamas")
//   console.log(thomsCloset)

// ========= Functions =======

// A. Print Greeting

function printGreeting(name) {
  console.log(`Hello welcome ${name}`);
}
printGreeting("Slimer");

// B. Print Cool
function printCool(name) {
  console.log(`${name} is cool`);
}
printCool("Captain Reynolds");

// C. Calculate Cube
function calculateCube(x) {
  return x * x * x;
}
console.log(calculateCube(5));

// D. isVowel
function isVowel(vowel) {
  if (
    vowel === "a" ||
    vowel === "e" ||
    vowel === "i" ||
    vowel === "o" ||
    vowel === "u" ||
    vowel === "y"
  ) {
    return true;
  } else {
    return false;
  }
}
// console.log(isVowel.toUpperCase("z"));

// E. getTwoLengths

const getTwoLengths = (i, j) => {
  return [i.length, j.length];
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. Get Multiple Lengths
const getMultipleLengths = (arr) => {
  return arr.map(function (word) {
    return word.length;
  });
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. Max of Three
const maxOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  }
  else if (b > c && b > a) {
    return b;
  }
  else if (c > b && c > b) {
    return c;
  }
};
console.log(maxOfThree(6, 9, 1));

const printLongestWord = (arr) => {
    let bigWord = ""
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[j].length; j++){
        if(arr[j] > arr[j]){
            bigWord = arr[j]
        }
    }
  }
      
}
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// ======= Objects ========

// A. Make A User Object

const user ={
    name:"John Hancock", email:"jhancock@biz.biz", age: 21, purchased:[]
}
// B. Update User
user.email = "john@biz.biz"
user.age = user.age+1

// C Adding keys & values
user.location = 'Somewhere in America'

// D. Shopaholic!
user.purchased.push('carbohydrates', 'peace of mind', 'Merino jodhphurs')
console.log(user.purchased[2])

// E. Object-within-object
user.friend = { name: "Jane Doe", email:"jane@biz.biz", age: 23, purchased:[], location:'Somewhere in America'}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring", 'A Latte')
console.log(user)

// F. Loops
for (let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i])
}
for (let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}
// G. Functions can operate on objects

user.userFunction = function updateUser() {
    user.age += 1
}
console.log(user)
function updateUser(person) {
    person user.age += 1
}
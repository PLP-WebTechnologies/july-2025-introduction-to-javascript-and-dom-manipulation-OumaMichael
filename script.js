// ----------------------------------------
// 🎯 Part 1: Variables, Data Types, Conditionals
// ----------------------------------------
let userName = "Rose";
let age = 22;

if (age >= 18) {
  console.log(userName + " is an adult.");
  document.getElementById("user-status").textContent = `${userName} is an adult.`;
} else {
  console.log(userName + " is a minor.");
  document.getElementById("user-status").textContent = `${userName} is a minor.`;
}

// ----------------------------------------
// ❤️ Part 2: JavaScript Functions
// ----------------------------------------

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total: $" + calculateTotal(10, 3));

// Function 2: Capitalize the first letter of a name
function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(capitalizeName("michael"));

// ----------------------------------------
// 🔁 Part 3: JavaScript Loops
// ----------------------------------------

// Loop 1: Display numbers 1–5 in the console
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// Loop 2: Display array of fruits to the page
let fruits = ["Apple", "Banana", "Mango"];
let outputDiv = document.getElementById("loop-output");

fruits.forEach((fruit) => {
  let p = document.createElement("p");
  p.textContent = "Fruit: " + fruit;
  outputDiv.appendChild(p);
});

// ----------------------------------------
// 🌐 Part 4: DOM Manipulation
// ----------------------------------------

// 1. Change heading text
document.getElementById("greeting").textContent = "Hello, " + capitalizeName(userName) + "!";

// 2. Event listener to toggle message
document.getElementById("clickBtn").addEventListener("click", function () {
  alert("Button clicked! Keep coding 🚀");
});

// 3. Dynamically create new element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added using JavaScript.";
document.body.appendChild(newPara);

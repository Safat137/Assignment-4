##1️⃣ Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById

Finds element by id.

Returns only one element because id is unique.

let title = document.getElementById("title");

getElementsByClassName

Finds elements by class.

Returns HTMLCollection, which can have many elements.

let items = document.getElementsByClassName("item");

querySelector

Returns the first element that matches a CSS selector.

let firstItem = document.querySelector(".item");

querySelectorAll

Returns all elements that match CSS selector.

Returns a NodeList.

let allItems = document.querySelectorAll(".item");

Easy way to remember:

id → getElementById

class → getElementsByClassName

CSS selector → querySelector / querySelectorAll

2️⃣ How to create and insert a new element into the DOM

Steps:

Create the element

Add text or content

Insert it into the page

Example:

let newParagraph = document.createElement("p");
newParagraph.innerText = "Hello I just created this with JavaScript!";
document.body.appendChild(newParagraph);
3️⃣ What is Event Bubbling?

Event bubbling = event starts from the element you clicked, then moves up to its parents, then parents’ parents, and so on.

Example HTML:

<div>
  <button>Click me</button>
</div>

Click button → button event runs first

Then div event runs

Then body

Then document

💡 So events bubble upward automatically.

4️⃣ What is Event Delegation? Why is it useful?

Event delegation = adding one event listener on parent instead of many children.
It listens for events from children using event.target.

Example:

document.getElementById("list").addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    console.log("List item clicked!");
  }
});

Why useful:

Less code ✅

Faster performance ⚡

Works for dynamically added elements 🔄

5️⃣ Difference between preventDefault() and stopPropagation()

preventDefault()

Stops browser default behavior

Example:

link.addEventListener("click", function(e){
  e.preventDefault(); // link won't open
});

stopPropagation()

Stops the event from bubbling up to parent elements

Example:

button.addEventListener("click", function(e){
  e.stopPropagation(); // parent won't know
});

Quick table:

Method	Stops
preventDefault	Browser default action
stopPropagation	Event bubbling
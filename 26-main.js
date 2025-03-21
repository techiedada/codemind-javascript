console.log("-- Change color of element --");
const changeColor = document.querySelector("#myDetails");
changeColor.style.color = "blue";
// changeColor.style.backgroundColor = "orange";

const headColor = document.querySelector("h3");
headColor.style.color = "red";
const body = document.querySelector("body");
body.style.backgroundColor = "#E9FFDB";
body.style.paddingLeft="10px";

console.log("-- remove element --");
const parentElement = document.querySelector("ul");
const childElement = document.querySelector("#secondElement");
// childElement.remove();  // first way
parentElement.removeChild(childElement);  // second way

// add node
const pElement = document.createElement("p");
const text = document.createTextNode("My footer section");
const footer = document.querySelector("footer");
pElement.appendChild(text);
footer.appendChild(pElement);



const data1 = document.querySelector('#name');
console.log(data1.innerText);
const list = document.querySelector('.lang');
console.log(list.innerText);


data1.style.color='red';

const text = document.createTextNode("Welcome in DOM");
const node = document.createElement('p');
node.appendChild(text);
const footer = document.querySelector('footer');
footer.appendChild(node);

const all = document.querySelectorAll('.lang');
for (const element of all) {
    console.log(element.innerText);
    
}
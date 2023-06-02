let cell = document.getElementById('marks-cell');
console.log(cell);

let tables = document.getElementsByClassName('table');
console.log(document.querySelector('h1'));

let tableTwo = document.querySelector("#table2")
console.dir(tableTwo);

let elem = document.createElement('div');
elem.classList.add('custom-div');
elem.innerHTML = 'hey mama';

document.body.appendChild(elem);



// function onClick(e) {


//     let val = e.target;
//     val.innerHTML = "no";
//     console.log(e.offsetX);
// }

let button = document.querySelector('#button');
button.addEventListener('mouseenter', (e) => {
    console.log('enterd');
    alert()
});

button.addEventListener('mouseleave', () => {
    console.log("left");
    alert();
});

localStorage.setItem('miguel', 'villasenor');

function onFormSubmit(e) {
    e.preventDefault();
    alert("hey");
}
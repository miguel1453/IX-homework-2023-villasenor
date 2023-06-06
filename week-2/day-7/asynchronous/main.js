// Asynchronous JavaScript

console.log(1);

setTimeout(() => {
    console.log(2)
}, 1000)

console.log(3);

// Callbacks (old)
const phoneBook = [
    {name: 'miguek', number: 9107422001},
    {name: 'esha', number: 9191231231},
    {name: 'michael', number: 1236789}
]

function getPhoneNumbers() {
    setTimeout(() => {
        let output = `<ol>`;

        for (let i = 0; i < phoneBook.length; i++) {
            let contact = phoneBook[i];
            output += `<li>`  + contact.name + ' ' + contact.number + '</li>';
        }

        output += '</li>'
        document.body.innerHTML = output;
    }, 1000)
}

getPhoneNumbers();

function saveContact(contact, callback) {
    setTimeout(() => {
        phoneBook.push(contact);

        alert('contact added');
        callback();
    }, 1000)

}

saveContact({name: 'ye', number: 12312}, getPhoneNumbers)





// Promises (old)
function saveContact(contact) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = false;

            if (!err) {
                phoneBook.push(contact)
                console.log('Success');
                resolve();
            } else {
                reject("Err!")
            }
        }, 100);
    });
}

saveContact({name: 'ye', number: 12312})
    .then(getPhoneNumbers)
    .catch((err) => {console.log(err)});



// Async Await (new standard)

async function init() {
    await saveContact({name: 'greg', number: 910721123});
    getPhoneNumbers();
    console.log('contact added');
}
init();

// async function start() {
//     try {
//         await saveContact();
//         getPhoneNumbers();
//     } catch (err) {
//         console.log(err);
//     }
// }

// start();


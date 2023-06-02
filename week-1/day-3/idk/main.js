let name = 'miguel'

let html = `
    <ul>
        <li>First name: ${name}</li>
    </ul>
`;

document.body.innerHTML = html;


const sheepCounter = (x) => {
    for (let i = 0; i < x; i++) {
        console.log(`Sheep number ${i+1}`);
    }
}

sheepCounter(10);

const todaysDate = () => {
console.log(new Date());
};
todaysDate();


const isSqaured = (x) => {
    let root = Math.sqrt(x);
    return root % 1 == 0;
};
console.log(isSqaured(10));
console.log(isSqaured(9));


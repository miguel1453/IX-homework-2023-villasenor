class Person {
    constructor(firstName, lastName, age, adrdess, phoneNumber) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
        this.adrdess = adrdess;
        this.phoneNUmber = phoneNumber;
    }

    fullName() {
        return `Full name: ${this.firstName} ${this.lastName}`;
    }
}

const miguel = new Person('miguel', 'villasenor', 20, 655, 9120232);
console.log(miguel);
console.log(miguel.fullName())


class Customer extends Person {
    constructor(firstName, lastName, age, address, phoneNUmber) {
        super(firstName, lastName, age, address, phoneNUmber);
    };
}

let customers = [];

class UI {
    constructor() {
        this.tableBody = document.getElementById('table-body');
    }

    renderCustomers() {
        this.tableBody.innerHTML = [];

        for( let i = 0; i < customers.length; i++) {
            const tr = document.createElement('tr');

            let firstName = document.createElement('td');
            let lastName = document.createElement('td');
            let age = document.createElement('td');
            let address = document.createElement('td');
            let phoneNumber = document.createElement('td');
            let dob = document.createElement('td');
            let memberShip = document.createElement('td');

            firstName.innerHTML = customers[i].firstName;
            lastName.innerHTML = customers[i].lastName;
            age.innerHTML = customers[i].age;
            address.innerHTML = customers[i].address;
            phoneNumber.innerHTML = customers[i].phoneNumber;

            tr.appendChild(firstName);
            tr.appendChild(lastName)
            tr.appendChild(age)
            tr.appendChild(address)
            tr.appendChild(phoneNumber)
            
            this.tableBody.appendChild(tr);

        }
    }
    
}

const gertrude = new Customer(
    'Gertrude',
    'Von Blauscwitz',
    77,
    '88 Holy Street',
    '011 425 6877',
    '02/02/1943',
    'Medallion'
  );

  customers.push(gertrude);

const ui = new UI();
ui.renderCustomers();
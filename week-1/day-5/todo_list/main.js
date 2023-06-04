class Task {
    constructor(name, completed) {
        this.name = name;
        this.completed = completed;
    }

    static fromJSON(json) {
        return new Task(json.name, json.completed);
    }
}

class UI {
    constructor() {
        this.tableBody = document.getElementById('tableBody');
        this.taskName = document.getElementById('input-task');
        this.tasks = [];
        this.loadFromStorage();
        this.renderTaskTable();


    }

    addTask() {
        const task = new Task(this.taskName.value, false);
        this.tasks.push(task);
        this.saveToStorage(task);
        this.renderTaskTable();
        this.taskName.value = '';


        
    }

    createTableRow(newTask) {
        let tr = document.createElement('tr');

        let tdTaskName = document.createElement('td');
        tdTaskName.innerHTML = newTask.name;

        let tdCheckBox = document.createElement('td')
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.setAttribute('class', 'form-check-input form-check-switch')
        // checkBox.setAttribute('onclick', () => {
        //     this.tasks.
        // })
        tdCheckBox.appendChild(checkBox);

        let tdDeleteButton = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
        deleteButton.onclick =  () => {
            this.deleteTask(newTask);
        };
        deleteButton.innerHTML = 'Delete';
        tdDeleteButton.appendChild(deleteButton);

        tr.appendChild(tdTaskName);
        tr.appendChild(tdCheckBox);
        tr.appendChild(tdDeleteButton);

       
        return tr;
    }

    deleteTask(task) {
        this.tasks = this.tasks.filter( (x) => {
            return x !== task;
        });
        this.saveToStorage();
        this.renderTaskTable();
    }

    renderTaskTable() {
        this.tableBody.innerHTML = '';

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const tr = this.createTableRow(task);
            this.tableBody.appendChild(tr);
        }

    }

    saveToStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }

    loadFromStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
            const taskArr = JSON.parse(json);
            this.tasks = taskArr.map( (x) => Task.fromJSON(x));
        }
    }
}

const ui = new UI();




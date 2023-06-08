import { Task } from "../models/Task";

import { collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import {db} from '../firebase/firebase';

class TaskService {
    constructor() {
        this.collection = 'tasks';
    }

    async fetchTasks() {
        const collectionRef = collection(db, this.collection);
        const q = query(collectionRef);
        const snapshot = await getDocs(q);

        const tasks = [];

        snapshot.forEach( (doc) => {
            const data = doc.data();
            const task = new Task(doc.id, data.name, data.completed)
            tasks.push(task);
        });
        return tasks;
    }

    async createTask(task){
        const collectionRef = collection(db, this.collection);

        const docRef =  await addDoc(collectionRef, {
            name: task.name,
            completed: task.completed,
        })

        task.id = docRef.id;
        return task;
    }

    async updateTask(){}

    async deleteTasks(){}
}

const service = new TaskService();
export default service;
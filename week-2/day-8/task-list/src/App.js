import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Task } from './models/Task';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';
import { useState, useEffect } from 'react';
import TaskService from './services/task-service'
import { SpinningCircles, Bars } from 'react-loading-icons';

function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    if (!tasks.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    setLoading(true);
    const tasks = await TaskService.fetchTasks();
    console.log(tasks);
    setTasks(tasks);
    setLoading(false);
  }


  async function onTaskCreate(name) { 
    //create task
    const task = await TaskService.createTask(new Task(null, name, false));

    setTasks([...tasks, task]);
  }

  function onTaskRemove(id) {

  }

  function onTaskCompleteToggle(id) {

  }

  return (
    <div className="container mt-5">

      <div className='card card-body text-center'>
        <h1>Task List</h1>

        <hr></hr>

        <p>Our firebase task list!</p>
        <TaskInput onTaskCreate={onTaskCreate}></TaskInput>
        <TaskTable onTaskCompleteToggle={onTaskCompleteToggle}
          tasks={tasks}
          onTaskRemove={onTaskRemove}
          loading={loading}>

        </TaskTable>
      </div>
    </div>
  );
}

export default App;

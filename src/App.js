import styles from './App.module.css';
import Header from './components/Header/Header';
import { useState } from 'react'
import Tasks from './components/Tasks/Tasks';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState(([
    {
      id: 1,
      text: 'Doctors Appointment',
      date: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      date: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      date: 'Feb 5th at 2:30pm',
      reminder: false
    },
  ]))

  const [showAddedTask, setShowAddedTask] = useState(false);

  const handleClick = () => setShowAddedTask(!showAddedTask);

  const addTask = (task) => { // task === object
    // set a random id
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles['task-tracker']}>
        <div className={styles.container}>
          <div className={styles["task-tracker-body"]}>
            <Header onClick={handleClick} showAddedTask={showAddedTask} />
            {showAddedTask && <AddTaskForm addTask={addTask} />}
            <Tasks tasks={tasks} setTasks={setTasks} deleteTask={ deleteTask}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

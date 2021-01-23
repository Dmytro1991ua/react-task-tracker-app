import styles from'./App.module.css';
import Header from './components/Header/Header';
import { useState } from 'react'
import Tasks from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState(([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    },
  ]))

  const [showAddedTask, setShowAddedTask] = useState(false);

  const handleClick = () => setShowAddedTask(!showAddedTask);
  
  return (
    <div className={styles.wrapper}>
      <section className={styles['task-tracker']}>
        <div className={styles.container}>
          <div className={styles["task-tracker-body"]}>
            <Header onClick={handleClick} showAddedTask={showAddedTask} />
            <Tasks tasks={tasks} setTasks={ setTasks}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import React from 'react'
import styles from './Task.module.css'
import { FaTimesCircle } from 'react-icons/fa'

const Task = ({ task, deleteTask }) => {
   const handleDeleteTask = () => {
      deleteTask(task.id);
   };

   return (
      <div className={styles.task}>
         <h3 className={styles.title}>
            {task.text}
            <FaTimesCircle size={25} color="#FF6347" cursor="pointer" onClick={handleDeleteTask }/>
         </h3>
         <p className={styles.date}>{task.date}</p>
      </div>
   )
}

export default Task

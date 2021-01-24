import React from 'react'
import styles from './AddTaskForm.module.css'
import { useState, useRef } from "react"

const AddTaskForm = ({ addTask }) => {
   const [text, setText] = useState(""); // Task
   const [date, setDate] = useState(""); // Date
   const [reminder, setReminder] = useState(false); // Specific Task Reminder
   const someRef = useRef(null);

   const onSubmit = (event) => {
      event.preventDefault();

      if (!text) {
         alert("Plese enter your task")
         console.log(someRef.current)
         return;
      }
      addTask({ text, date, reminder });

      setText("");
      setDate("");
      setReminder(false);
   }
   return (
      <form className={styles.form} onSubmit={onSubmit}>
         <div className={styles["form-item"]}>
            <label className={styles.label} htmlFor="usertask">New Task</label>
            <input className={styles.input} ref={someRef} type="text" value={text} placeholder="Enter Your Task..." id="usertask" onChange={(event) => setText(event.target.value)} />
         </div>
         <div className={styles["form-item"]}>
            <label className={styles.label} htmlFor="userdate">New Task</label>
            <input className={styles.input} type="text" value={date} placeholder="Enter Date & Time..." id="userdate" onChange={(event) => setDate(event.target.value)} />
         </div>
         <div className={`${styles["form-item"]} ${styles['form-checkbox']}`}>
            <input className={`${styles.input} ${styles.checkbox} `} type="checkbox" value={reminder} id="userreminder" onChange={(event) => setReminder(event.currentTarget.checked)} />
            <label className={`${styles.label} ${styles['label-checkbox']}`} htmlFor="userreminder">New Task</label>
         </div>
         <input className={styles["btn-submit"]} type="submit" value="Save Task" />
      </form>
   )
}

export default AddTaskForm

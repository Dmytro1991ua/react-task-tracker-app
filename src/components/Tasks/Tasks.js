import React from 'react'
import Task from '../Task/Task'

const Tasks = ({ tasks, setTasks, deleteTask, onToggle }) => {
   const renderTasks = tasks.map(task => {
      return <Task key={task.id} task={task} deleteTask={deleteTask} onToggle={onToggle} />
   })

   return (
      <div className="tasks">
         {renderTasks}
      </div>
   )
}

export default Tasks

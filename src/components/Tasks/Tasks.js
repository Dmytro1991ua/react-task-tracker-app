import React from 'react'
import Task from '../Task/Task'

const Tasks = ({ tasks, setTasks, deleteTask }) => {
   const renderTasks = tasks.map(task => {
      return <Task key={task.id} task={task} deleteTask={ deleteTask}/>
   })

   return (
      <div className="tasks">
         {renderTasks}
      </div>
   )
}

export default Tasks

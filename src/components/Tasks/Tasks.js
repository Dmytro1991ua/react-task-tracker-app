import React from 'react'
import Task from '../Task/Task'

const Tasks = ({ tasks, setTasks }) => {
   const renderTasks = tasks.map(task => {
      return <Task key={task.id} task={task} />
   })

   return (
      <div className="tasks">
         {renderTasks}
      </div>
   )
}

export default Tasks

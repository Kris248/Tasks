import React from 'react'
import tasksStore from '../stores/tasksStore';

const Task = ({task}) => {
  const store = tasksStore((store)=> {
    return {
      handleDeletedTask: store.handleDeletedTask,
      handleUpdatedTask: store.handleUpdatedTask
    }
  })
  return (
    <div key={task._id}>
              <h3>{task.title}</h3>
              <button onClick={() => store.handleDeletedTask(task._id)}>Delete Task</button>
              <button onClick={() => store.handleUpdatedTask(task)}>Update Task</button>
            </div>
  )
}

export default Task
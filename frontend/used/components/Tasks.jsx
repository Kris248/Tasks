import React from 'react'
import tasksStore from '../stores/tasksStore';
import Task from './Task';

const Tasks = () => {
  const store = tasksStore();
  return (
    <div key={store.tasks}>
      <h2>Tasks Display:</h2>
      {store.tasks &&
        store.tasks.map((task) => {
          return (
            <Task task={task}  key={task._id} />
          );
        })}
      </div>
  )
}

export default Tasks
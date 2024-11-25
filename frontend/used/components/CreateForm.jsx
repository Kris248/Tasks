import React from 'react'
import tasksStore from '../stores/tasksStore'

const CreateForm = () => {
    const store = tasksStore();
    if (store.updateForm._id) return <></>;
  return (
        <div>
        <h2>Create Task:</h2>
        <form onSubmit={store.createTask}>
          <h4>Enter Title: </h4>
          <input
            type="text"
            onChange={store.fillForm}
            value={store.createForm.title}
            name="title"
            required
          />
          <br />
          <h4>Enter Description: </h4>
          <textarea
            type="text"
            onChange={store.fillForm}
            value={store.createForm.description}
            name="description"
            required
          />
          <br />
          <h4>Due-Date: </h4>
          <input
            type="date"
            onChange={store.fillForm}
            value={store.createForm.duedate ? store.formatDate(new Date(store.createForm.duedate)) : ''}
            name="duedate"
            required
          />
          <br />
          <h4>Status: </h4>
          <select
            onChange={store.fillForm}
            value={store.createForm.status}
            name="status"
            required
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="in progress">In Progress</option>
          </select>

          <br />
          <h4>Assigned To: </h4>
          <input
            type="email"
            onChange={store.fillForm}
            value={store.createForm.assignedUser}
            name="assignedUser"
            required
          />
          <button type="submit">Create Task</button>
        </form>
      </div>
  )
}

export default CreateForm
import React from 'react'
import tasksStore from '../stores/tasksStore'

const UpdateForm = () => {
    const store = tasksStore();
    if(!store.updateForm._id) return <></>;
  return (
        <div>
        <h2>Update Task:</h2>
        <form onSubmit={store.handleUpdateFormButton}>
          <h4>Enter Title: </h4>
          <input
            type="text"
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.title}
            name="title"
            required
          />
          <br />
          <h4>Enter Description: </h4>
          <textarea
            type="text"
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.description}
            name="description"
            required
          />
          <br />
          <h4>Due-Date: </h4>
          <input
            type="date"
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.duedate ?store.formatDate(store.updateForm.duedate) : ''}
            name="duedate"
            required
          />
          <br />
          <h4>Status: </h4>
          <select
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.status}
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
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.assignedUser}
            name="assignedUser"
            required
          />
          <button type="submit">Update Task</button>
        </form>
      </div>
  )
}

export default UpdateForm
import { create } from "zustand";
import axios from "axios";

const tasksStore = create((set) => ({

    formatDate: (dateString) => {
        // Return empty string if the date is not provided
        const dateObj = new Date(dateString);
        if (isNaN(dateObj.getTime())) return ""; // Return empty string if the date is invalid
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Adjust month by adding 1
        const day = String(dateObj.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      },


  tasks: null,

  createForm: {
    title: "",
    description: "",
    duedate: "",
    status: "",
    assignedUser: "",
  },

  updateForm: {
    _id: null,
    title: "",
    description: "",
    duedate: "",
    status: "",
    assignedUser: "",
  },

  fetchTasks: async () => {
    try {
      const res = await axios.get("http://localhost:5000/tasks");
      set({ tasks: res.data.tasks });
    } catch (error) {
      console.log("Error retrieving tasks", error);
    }
  },

  fillForm: (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    // do this else u cant type in input
    set((state) => {
      return {
        ...state,
        createForm: {
          ...state.createForm,
          [name]: newValue,
        },
      };
    });
  },

  createTask: async (e) => {
    e.preventDefault();
    try {
      const { createForm, tasks } = tasksStore.getState();
      const res = await axios.post("http://localhost:5000/tasks", createForm);

      set({
        tasks: [...tasks, res.data.tasks],
        createForm: {
          title: "",
          description: "",
          duedate: "",
          status: "",
          assignedUser: "",
        },
      });
      console.log("Created Task");
      fetchTasks();
    } catch (error) {
      console.log("Error creating task", error);
    }
  },

  handleDeletedTask: async (_id) => {
    // Delete Record using id
    await axios.delete(`http://localhost:5000/tasks/${_id}`);
    const { tasks } = tasksStore.getState();
    // updating state
    const newTasks = tasks.filter((task) => {
      return task._id !== _id;
    });
    set({ tasks: newTasks });
  },

  handleUpdateFieldChange: (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    // do this else u cant type in input
    set((state) => {
      return {
        ...state,
        updateForm: {
          ...state.updateForm,
          [name]: newValue,
        },
      };
    });
  },

  handleUpdateFormButton: async (e) => {
    e.preventDefault();

    const { updateForm:{_id, title, description, duedate, status, assignedUser}, tasks } = tasksStore.getState();
    // send update request
    const res = await axios.put(
      `http://localhost:5000/tasks/${_id}`,
      { title, description, duedate, status, assignedUser }
    );

    // Update the tasks state with the updated task
    const updatedTask = [...tasks];
    const taskIndex = tasks.findIndex((task)=> {
        return task._id === _id;
    })
    updatedTask[taskIndex] = res.data.task;

    set({
        tasks: updatedTask,
      updateForm: {
        _id: null,
        title: "",
        description: "",
        duedate: "",
        status: "",
        assignedUser: "",
      },
    });
    console.log("Task Updated");
      fetchTasks();
  },

  handleUpdatedTask: ({_id, title, description, duedate, status, assignedUser }) => {
    set({
    updateForm: {
        _id,
        title,
        description,
        duedate,
        status,
        assignedUser
    }
    })
  }


}));

export default tasksStore;

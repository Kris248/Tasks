const Task = require('../models/task');


const createTask = async (req, res) => {
    // Get the data from user
    // const { title, description, duedate, status, assignedUser } = req.body;
    const title = req.body.title;
    const description = req.body.description;
    const duedate = req.body.duedate;
    const status = req.body.status;
    const assignedUser = req.body.assignedUser;
    // Creating new Task from received data
    const task = await Task.create({
      title: title,
      description: description,
      duedate: duedate,
      status: status,
      assignedUser: assignedUser,
    });
  
    res.json({ task: task });
  }


const fetchTasks = async (req,res)=>{
    const tasks = await Task.find();
    res.json({tasks: tasks});
}



const fetchTask = async (req,res) => {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    res.json({task: task});
}



const updateTask = async (req,res) => {
    // getting id
    const taskId = req.params.id;
    // getting the record to update
    const {title, description, duedate, status, assignedUser} = req.body;

    // updating the record
    await Task.findByIdAndUpdate(taskId, {
        title, description, duedate, status, assignedUser
    })

    // find the updated record
    const task = await Task.findById(taskId);
    res.json({task: task});
}

const deleteTask = async (req,res)=>{ 
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.json({status:"Record Deleted"});
}

module.exports = {
    createTask: createTask,
    fetchTasks: fetchTasks,
    fetchTask: fetchTask,
    updateTask: updateTask,
    deleteTask: deleteTask
}
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const Task = require('./models/task')
const connectToDb = require("./config/connectToDb");
const tasksController = require("./controllers/tasksController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");



const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
connectToDb();

// config cors for diff domain (reactjs)


// app.delete('/tasks', async (req, res) => {
//   try {
//     await Task.deleteMany();
//     res.json({ message: "Records deleted" });
//   } catch (error) {
//     console.error('Error deleting records:', error);
//     res.status(500).json({ error: 'Error deleting records' });
//   }
// });

app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get("/check-auth", usersController.checkAuth);


app.get('/users', usersController.fetchUsers);


app.post("/tasks", tasksController.createTask);
app.get("/tasks", tasksController.fetchTasks);
app.get("/tasks/:id", tasksController.fetchTask);
app.put("/tasks/:id", tasksController.updateTask);
app.delete("/tasks/:id", tasksController.deleteTask);

app.listen(process.env.PORT);

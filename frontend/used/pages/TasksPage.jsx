import React, { useEffect } from "react";
import Tasks from "../components/Tasks";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import tasksStore from "../stores/tasksStore";

const TasksPage = () => {
  const store = tasksStore();

  useEffect(() => {
    store.fetchTasks();
  }, []);

  return (
    <div>
      <Tasks />
      <UpdateForm />
      <CreateForm />
    </div>
  );
};

export default TasksPage;

import React from 'react';
import tasksStore from '../stores/tasksStore';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  taskContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    background: 'linear-gradient(90deg, #f0f0f0 0%, #ffffff 50%, #f0f0f0 100%)',
  },
  buttonContainer: {
    display: 'flex',
    gap: theme.spacing(2),
  },
}));

const Task = ({ task }) => {
  const classes = useStyles();
  const store = tasksStore((store) => {
    return {
      handleDeletedTask: store.handleDeletedTask,
      handleUpdatedTask: store.handleUpdatedTask,
    };
  });

  return (
    <div className={classes.taskContainer}>
      <Typography variant="h6">{task.title}</Typography>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          onClick={() => store.handleDeletedTask(task._id)}
        >
          <b>Delete Task</b>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => store.handleUpdatedTask(task)}
        >
          Update Task
        </Button>
      </div>
    </div>
  );
};

export default Task;

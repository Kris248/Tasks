import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import tasksStore from '../stores/tasksStore';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: 400,
    padding: theme.spacing(2),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: theme.spacing(1),
    backgroundColor: '#fff',
  },
  formTitle: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
}));

const UpdateForm = () => {
  const classes = useStyles();
  const store = tasksStore();
  if (!store.updateForm._id) return null;

  return (
    <Container className={classes.container} maxWidth="sm" align="center">
      <div className={classes.formContainer}>
        <Typography variant="h6" className={classes.formTitle}>
          Update Task
        </Typography>
        <form onSubmit={store.handleUpdateFormButton}>
        <TextField
          className={classes.formField}
          label="Title"
          variant="outlined"
          type="text"
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.title}
          name="title"
          required
          fullWidth
        />
        <TextField
          className={classes.formField}
          label="Description"
          variant="outlined"
          type="text"
          multiline
          rows={4}
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.description}
          name="description"
          required
          fullWidth
        />
        <TextField
          className={classes.formField}
          label="Due Date"
          variant="outlined"
          type="date"
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.duedate ? store.formatDate(new Date(store.updateForm.duedate)) : ''}
          name="duedate"
          required
          fullWidth
        />
        <TextField
          className={classes.formField}
          label="Status"
          variant="outlined"
          select
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.status}
          name="status"
          required
          fullWidth
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="in progress">In Progress</option>
        </TextField>
        <TextField
          className={classes.formField}
          label="Assigned To"
          variant="outlined"
          type="email"
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.assignedUser}
          name="assignedUser"
          required
          fullWidth
        />
        <Button className={classes.formButton} variant="contained" color="primary" type="submit" fullWidth>
          Update Task
        </Button>
        </form>
      </div>
    </Container>
  );
};

export default UpdateForm;

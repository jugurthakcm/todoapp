import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todos from './Todos';
import DeletedTodos from './DeletedTodos';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid sm={6} item>
          <List className='todosList'>
            <Todos />
          </List>
        </Grid>
        <Grid sm={6} item>
          <List className='todosList'>
            <DeletedTodos />
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoContainer;

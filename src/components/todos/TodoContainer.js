import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todos from './Todos';

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
      <List className='todosList'>
        <Todos />
      </List>
    </div>
  );
};

export default TodoContainer;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todos from './Todos';
import DeletedTodos from './DeletedTodos';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoContainer = (props) => {
  const classes = useStyles();
  const { todos, deletedTodos } = props;
  if (todos && deletedTodos) {
    return (
      <div className={classes.root}>
        <List className='todosList'>
          <Todos />
        </List>

        <List className='todosList'>
          <DeletedTodos />
        </List>
      </div>
    );
  } else {
    return <Alert severity='info'>Loading todos...</Alert>;
  }
};

const mapStateToProps = (state) => {
  return {
    deletedTodos: state.firestore.ordered.deletedTodos,
    todos: state.firestore.ordered.todos,
  };
};
export default compose(
  firestoreConnect([{ collection: 'deletedTodos' }, { collection: 'todos' }]),
  connect(mapStateToProps)
)(TodoContainer);

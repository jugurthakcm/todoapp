import React, { Component } from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Alert from '@material-ui/lab/Alert';
import { deleteTodo } from '../../store/actions/todoActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
class DeletedTodos extends Component {
  handleClick = (id) => {
    this.props.deleteTodo(id);
  };
  render() {
    const data = this.props.deletedTodos
      ? this.props.deletedTodos.filter(
          (todo) => todo.userId === this.props.userId
        )
      : [];

    const deletedTodos = data.length ? (
      data.map((todo) => {
        return (
          <div
            key={todo.id}
            onClick={() => {
              this.handleClick(todo.id);
            }}
          >
            <ListItem button>
              <ListItemText
                primary={todo.content}
                className='deleted-todo-text'
              />
              <IconButton edge='end' aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </div>
        );
      })
    ) : (
      <Alert severity='info' color='info'>
        No Completed todos yet
      </Alert>
    );
    return <div>{this.props.loaded && deletedTodos}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    deletedTodos: state.firestore.ordered.deletedTodos,
    userId: state.firebase.auth.uid,
    loaded: state.firebase.auth.isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id, content) => dispatch(deleteTodo(id, content)),
  };
};

export default compose(
  firestoreConnect([{ collection: 'deletedTodos' }]),
  connect(mapStateToProps, mapDispatchToProps)
)(DeletedTodos);

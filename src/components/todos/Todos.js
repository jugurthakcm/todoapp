import React, { Component } from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';
import { checkTodo } from '../../store/actions/todoActions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
class Todos extends Component {
  handleClick = (id, content) => {
    this.props.checkTodo(id, content);
  };

  render() {
    if (this.props.userId) {
      if (this.props.todos) {
        const data = this.props.todos.length
          ? this.props.todos.filter((todo) => todo.userId === this.props.userId)
          : [];

        const todos = data.length ? (
          data.map((todo) => {
            return (
              <div
                key={todo.id}
                onClick={() => {
                  this.handleClick(todo.id, todo.content);
                }}
              >
                <ListItem button>
                  <ListItemText primary={todo.content} />
                  <IconButton edge='end' aria-label='delete'>
                    <CheckIcon />
                  </IconButton>
                </ListItem>
                <Divider />
              </div>
            );
          })
        ) : (
          <Alert severity='success' color='info'>
            No todos yet
          </Alert>
        );
        return <div>{todos}</div>;
      } else {
        return <Alert severity='info'>Loading todos...</Alert>;
      }
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.firestore.ordered.todos,
    userId: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkTodo: (id, content) => dispatch(checkTodo(id, content)),
  };
};

export default compose(
  firestoreConnect([{ collection: 'todos' }]),
  connect(mapStateToProps, mapDispatchToProps)
)(Todos);

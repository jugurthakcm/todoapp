import React, { Component } from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';
import { deleteTodo } from '../store/actions/todoActions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Alert from '@material-ui/lab/Alert';
class Todos extends Component {
  handleClick = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    if (this.props.todos) {
      const todos = this.props.todos.length ? (
        this.props.todos.map((todo) => {
          return (
            <div
              key={todo.id}
              onClick={() => {
                this.handleClick(todo.id);
              }}
            >
              <ListItem button>
                <ListItemText primary={todo.content} />
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
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.firestore.ordered.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default compose(
  firestoreConnect([{ collection: 'todos' }]),
  connect(mapStateToProps, mapDispatchToProps)
)(Todos);

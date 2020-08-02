import React, { Component } from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';
import { deleteTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class Todos extends Component {
  handleClick = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
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
      <p>None</p>
    );
    return <div>{todos}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

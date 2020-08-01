import React, { Component } from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';

import { connect } from 'react-redux';

class Todos extends Component {
  render() {
    const todos = this.props.todos.length ? (
      this.props.todos.map((todo) => {
        return (
          <div key={todo.id}>
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

export default connect(mapStateToProps)(Todos);

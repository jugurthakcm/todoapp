import React from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';
function DeletedTodos() {
  return (
    <div>
      <ListItem button>
        <ListItemText primary='Hello' />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary='todo.content ' />
      </ListItem>
      <Divider />
    </div>
  );
}

export default DeletedTodos;

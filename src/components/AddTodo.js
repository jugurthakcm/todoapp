import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddTodo extends Component {
  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));
    return (
      <div>
        <form className={useStyles.root} noValidate autoComplete='off'>
          <TextField id='standard-basic' label='Add Todo' fullWidth />
          <Button variant='contained' color='primary' style={{ marginTop: 10 }}>
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}

export default AddTodo;

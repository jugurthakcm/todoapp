import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTodo } from '../store/actions/todoActions';
import { connect } from 'react-redux';
class AddTodo extends Component {
  state = {
    content: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

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
        <form
          className={useStyles.root}
          noValidate
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <TextField
            id='standard-basic'
            label='Add Todo'
            fullWidth
            onChange={this.handleChange}
            value={this.state.content}
            style={{ marginTop: 10 }}
          />
          <Button
            variant='contained'
            color='primary'
            style={{ marginTop: 10 }}
            type='submit'
          >
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => dispatch(addTodo(content)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);

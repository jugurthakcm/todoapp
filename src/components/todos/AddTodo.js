import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { addTodo } from '../../store/actions/todoActions';
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
    const auth = this.props.auth ? (
      <form
        className={useStyles.root}
        noValidate
        autoComplete='off'
        onSubmit={this.handleSubmit}
        style={{ marginBottom: 30, marginTop: 30 }}
      >
        <FormControl className='form-control'>
          <InputLabel htmlFor='standard-basic'>Todo</InputLabel>
          <Input
            id='standard-basic'
            label='Add Todo'
            fullWidth
            onChange={this.handleChange}
            value={this.state.content}
            endAdornment={
              <InputAdornment position='end'>
                <Button color='primary' type='submit'>
                  Add Todo
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    ) : (
      <p className='not-signed-in'>You need to login to use the Todo app</p>
    );
    return <div>{auth}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => dispatch(addTodo(content)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

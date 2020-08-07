import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignedIn extends Component {
  handleClick = () => {
    this.props.signIn();
  };
  render() {
    return (
      <Button
        variant='outlined'
        color='primary'
        className='login-btn'
        onClick={this.handleClick}
      >
        Login using Google
      </Button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn()),
  };
};

export default connect(null, mapDispatchToProps)(SignedIn);

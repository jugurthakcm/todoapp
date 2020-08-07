import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { googleSign } from '../../store/actions/authActions';

class SignedIn extends Component {
  handleClick = () => {
    this.props.googleSign();
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
    googleSign: () => dispatch(googleSign()),
  };
};

export default connect(null, mapDispatchToProps)(SignedIn);

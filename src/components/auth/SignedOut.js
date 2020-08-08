import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignedOut extends Component {
  handleClick = () => {
    this.props.signIn();
  };
  render() {
    return (
      <div className='login-btn'>
        <Button variant='outlined' color='primary' onClick={this.handleClick}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png'
            alt='google icon'
            width='16px'
            style={{ marginRight: 10 }}
          />
          Login using Google
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn()),
  };
};

export default connect(null, mapDispatchToProps)(SignedOut);

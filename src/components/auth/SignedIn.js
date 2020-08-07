import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { signOut } from '../../store/actions/authActions';

class SignedIn extends Component {
  handleClick = () => {
    this.props.signOut();
  };
  render() {
    return (
      <div className='signed-in'>
        <p>{this.props.name}</p>
        <Avatar
          alt={this.props.name}
          style={{ marginRight: 20, marginLeft: 20 }}
          src={this.props.avatar}
        />
        <Button variant='outlined' color='secondary' onClick={this.handleClick}>
          Sign Out
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    avatar: state.firebase.auth.photoURL,
    name: state.firebase.auth.displayName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);

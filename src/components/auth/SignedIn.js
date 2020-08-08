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
      <div className='signed-in-links'>
        <Avatar alt={this.props.name} src={this.props.avatar} />
        <p style={{ marginRight: 50, marginLeft: 10 }}>{this.props.name}</p>

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

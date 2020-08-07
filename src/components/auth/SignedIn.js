import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';

class SignedIn extends Component {
  render() {
    return (
      <div className='signed-in'>
        <p style={{ marginRight: 10 }}>{this.props.name}</p>
        <Avatar alt={this.props.name} src={this.props.avatar} />
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

export default connect(mapStateToProps)(SignedIn);

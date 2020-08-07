import React from 'react';
import { connect } from 'react-redux';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const GoogleSign = (props) => {
  const signed = props.auth ? <SignedIn /> : <SignedOut />;
  return <div className='login-container'>{props.loaded && signed}</div>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
    loaded: state.firebase.auth.isLoaded,
  };
};

export default connect(mapStateToProps)(GoogleSign);

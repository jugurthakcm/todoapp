import React from 'react';
import SignedIn from '../auth/SignedIn';
import { connect } from 'react-redux';
import moment from 'moment';

function Navbar(props) {
  const signed = props.auth ? <SignedIn /> : null;
  return (
    <div className='navbar'>
      <div style={{ color: 'gray' }}>
        {moment().format('dddd, MMMM Do, YYYY')}
      </div>
      {signed}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Navbar);

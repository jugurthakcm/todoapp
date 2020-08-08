import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../todos/AddTodo';
import TodoContainer from '../todos/TodoContainer';
import SignedOut from '../auth/SignedOut';

function Main(props) {
  const signed = props.auth ? (
    <div>
      <AddTodo />
      <TodoContainer />
    </div>
  ) : (
    <div className='sign-out-container'>
      <p className='sign-out-message'>Please login to use the Todo App</p>
      <SignedOut />
    </div>
  );
  return (
    <div>
      <h1>Todo App</h1>
      {signed}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Main);

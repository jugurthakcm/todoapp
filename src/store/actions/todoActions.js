import firebase from 'firebase/app';

export const addTodo = (content) => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection('todos')
      .add({ content, timeStamps: new Date() })
      .then(() => {
        dispatch({ type: 'ADD_TODO', content });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_TODO_ERROR', err });
      });
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

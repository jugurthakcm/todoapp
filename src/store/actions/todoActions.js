import firebase from 'firebase/app';

export const addTodo = (content) => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection('todos')
      .add({ content, timeStamps: new Date() })
      .then(() => {
        dispatch({ type: 'ADD_TODO', content });
      });
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

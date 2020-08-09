export const addTodo = (content) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('todos')
      .add({
        content,
        createdAt: new Date(),
        userId: getState().firebase.auth.uid,
      })
      .then(() => {
        dispatch({ type: 'ADD_TODO', content });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_TODO_ERROR', err });
      });
  };
};

export const checkTodo = (id, content) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('todos').doc(id).delete();
    // .then(() => {
    //   dispatch({ type: 'DELETE_TODO' });
    // })
    // .catch((err) => {
    //   dispatch({ type: 'DELETE_TODO_ERROR', err });
    // });

    firestore
      .collection('deletedTodos')
      .doc(id)
      .set({
        content,
        deletedAt: new Date(),
        userId: getState().firebase.auth.uid,
      })
      .then(() => {
        dispatch({ type: 'CHECK_TODO' });
      })
      .catch((err) => {
        dispatch({ type: 'CHECK_TODO_ERROR', err });
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('deletedTodos')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_TODO' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_TODO_ERROR', err });
      });
  };
};

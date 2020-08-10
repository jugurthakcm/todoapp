export const signIn = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((resp) => {
        let user = resp.user;
        firestore.collection('users').doc(user.uid).set({
          userName: user.displayName,
          email: user.email,
          createdAt: new Date(),
        });
      })
      .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
      .catch(function (err) {
        dispatch({ type: 'LOGIN_ERROR', err: err.message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch({ type: 'LOGOUT_SUCCESS' });
      })
      .catch(function (err) {
        dispatch({ type: 'LOGOUT_ERROR', err: err.message });
      });
  };
};

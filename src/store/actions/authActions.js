export const googleSign = () => {
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
      .catch(function (error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
      });
  };
};

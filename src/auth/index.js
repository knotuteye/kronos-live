import firebase from "firebase";
export function loginWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function logOut() {
  return firebase.auth().signOut();
}

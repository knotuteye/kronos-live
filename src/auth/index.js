import { getAuth, signInWithEmailAndPassword, signOut } from "@firebase/auth";

export function loginWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(getAuth(), email, password);
}

export function getCurrentUser() {
  return getAuth().currentUser;
}

export function logOut() {
  return signOut(getAuth());
}

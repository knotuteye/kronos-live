import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const defaultAuth = getAuth();

export function loginWithEmailAndPassword(email, password) {
  signInWithEmailAndPassword(defaultAuth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => console.log(error));
}

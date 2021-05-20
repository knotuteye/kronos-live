import { signInWithEmailAndPassword } from "@firebase/auth";

export function loginWithEmailAndPassword(email, password) {
  signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => console.log(error));
}

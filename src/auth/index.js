import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

export function loginWithEmailAndPassword(email, password) {
  signInWithEmailAndPassword(getAuth(), email, password)
    .then(({user}) => {
      console.log(user);
    })
    .catch((error) => console.log(error));
}

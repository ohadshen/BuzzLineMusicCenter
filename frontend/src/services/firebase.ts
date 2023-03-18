import firebase from "firebase/compat/app";

const LoginFirebase = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredentials = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token) => {
        localStorage.setItem("token", token);
      });
  } catch (error) {
    throw error;
  }
};

const LogoutFirebase = async (): Promise<void> => {
  try {
    await firebase.auth().signOut();
    localStorage.removeItem("token");
  } catch (error) {
    throw error;
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyCU0BxqK1LleTpwV4nbanT6hWhBzvGRs6A",
  authDomain: "buzzline-93257.firebaseapp.com",
  projectId: "buzzline-93257",
  storageBucket: "buzzline-93257.appspot.com",
  messagingSenderId: "382117293728",
  appId: "1:382117293728:web:6c669a18de70db591fa3c5",
  measurementId: "G-TDQ0FB3SY2",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export { LoginFirebase, LogoutFirebase };

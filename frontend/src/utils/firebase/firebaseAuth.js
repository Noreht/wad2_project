import { auth } from "./firebaseInit";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile
} from "firebase/auth";
import AUTH_ERROR_CODES_MAP from "./firebaseAuthErrorCodes";
import { onAuthStateChanged } from 'firebase/auth';

// Sign out
export const signOutUser = async () => {
    return signOut(auth);
};


// Register with email and password
export const emailRegister = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};


// Sign in with email and password
export const emailSignIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};



export const updateUserProfile = (updatedUserObj) => {
  return updateProfile(auth.currentUser, updatedUserObj);
};


// 
export const isLoggedIn = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(!!user); // Resolve with true if a user is logged in, otherwise false
    });
  });
};


export const getCurrentUser = () => {
  return auth.currentUser;
};


// Error handling
export const getFirebaseErrorMessage = (err) => {
    let errorMessage;
  
    switch (err.code) {
      case AUTH_ERROR_CODES_MAP.POPUP_CLOSED_BY_USER:
        errorMessage = "Popup was closed by user";
        break;
      case AUTH_ERROR_CODES_MAP.POPUP_BLOCKED:
        errorMessage = "Popup was blocked by browser";
        break;
      case AUTH_ERROR_CODES_MAP.INVALID_EMAIL:
        errorMessage = "Invalid email";
        break;
      case AUTH_ERROR_CODES_MAP.INVALID_PASSWORD:
        errorMessage = "Wrong password";
        break;
      case AUTH_ERROR_CODES_MAP.WEAK_PASSWORD:
        errorMessage = "Password is too weak";
        break;
      case AUTH_ERROR_CODES_MAP.USER_DELETED:
        errorMessage = "User not found";
        break;
      case AUTH_ERROR_CODES_MAP.USER_DISABLED:
        errorMessage = "User disabled";
        break;
      case AUTH_ERROR_CODES_MAP.EMAIL_EXISTS:
        errorMessage = "Email already in use";
        break;
      case AUTH_ERROR_CODES_MAP.OPERATION_NOT_ALLOWED:
        errorMessage = "Operation not allowed";
        break;
      case AUTH_ERROR_CODES_MAP.TOO_MANY_ATTEMPTS_TRY_LATER:
        errorMessage = "Too many requests";
        break;
      default:
        console.log(err.code);
        errorMessage = "Unknown error";
    }
  
    return errorMessage;
  };
  
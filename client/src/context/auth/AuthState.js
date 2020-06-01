import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
      token: localStorage.getItem('token'),
      user:null,
      isAuthenticated: null,
      loading: true,
      error:null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Load User 

  //Register User

  //Login User

  // Logout 

  // Clear Errors

  return <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error
  }}>
      {props.childer}
  </AuthContext.Provider>;
};

export default AuthState;

import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, reducer } from './reducer'
import { authenticateAction } from './actions';
import { isTokenVAlid } from '../utils/jwt';

const authContext = createContext()
const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
   const token = localStorage.getItem("accessToken");

   if (token && isTokenVAlid(token)) {
    dispatch(authenticateAction(token))
   }
  }, [])
  
  return (
    <authContext.Provider value={{state, dispatch}}>{children}</authContext.Provider>
  )
}

const useAuthContext = () => {
  const AuthContext = useContext(authContext)
  if (!AuthContext) {
    throw new Error("auth Context is not Working")
  }
  return AuthContext
}

export  {AuthContextProvider, useAuthContext}
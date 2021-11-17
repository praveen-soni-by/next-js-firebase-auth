import { useState, useEffect } from 'react'
import Firebase from '../firebase/firebase';


export default function useFirebaseAuth() {
 

  const login = (emailId:string,password:string)=>{

  }
  const signUp = ({emailId,password,uName}:any)=>{

  }
  return {
    login,
    signUp
  };
}
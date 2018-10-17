import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

const SignIn = props => (
      <div className="SignIn">
        <button onClick={props.signIn}>
          Sign In
        </button>
      </div>
)


export default SignIn;
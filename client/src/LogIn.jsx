import React from "react";
import SignIn from "./SignIn"

const LogIn = (props) => (
    <div className='logon-screen'>
        <h1 className='logon-screen__content'>Date Night Movies</h1>
        <SignIn signIn={props.signIn}/>
    </div>
)

export default LogIn
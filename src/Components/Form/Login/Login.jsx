import React from 'react';
import Button from './../../Button/Button';
import TextField from './../TextField/TextField';
import './Login.scss';

const Login = () => {
    return(
        <div className="login-form">
            <TextField label={"Username"} size={'lg'}/>
            <div className="break"></div>
            <TextField label={"Password"} size={'lg'}/>
            <div className="break"></div>
            <Button size={'md'} label={"Login"}/>
        </div>
    );
    
};

export default Login;
import React from 'react';
import Button from './../../Button/Button';
import TextField from './../TextField/TextField';
import './Login.scss';

const Login = () => {
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "login-form"
    },
    /*#__PURE__*/
    React.createElement(TextField, {
      label: "Username",
      size: 'lg'
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "break"
    }),
    /*#__PURE__*/
    React.createElement(TextField, {
      label: "Password",
      size: 'lg'
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "break"
    }),
    /*#__PURE__*/
    React.createElement(Button, {
      size: 'md',
      label: "Login"
    }))
  );
};

export default Login;
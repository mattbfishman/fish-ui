import React from 'react';
import styled from 'styled-components';
import * as Styles from './LoginStyles';
import TextField from '../TextField/TextField';
import Button from '../../Button/Button';
const StyledLogin = styled.div`
    ${Styles.loginBase};
    flex-wrap: wrap;
    div{
        display: flex;
        flex: 1 0 100%;
        justify-content: center;
        flex-wrap: wrap; 
        align-content: center;

    }
    .login-form{
        height: 65%;
    }
    .create-form{
        background: #f8f8f8;
        height: 35%;
    }
    .create-form > h4{
        margin: 0;
    }
`;
const LoginInput = styled(TextField)`
    margin: 10px auto 10px auto;
    flex: 0 1 80%;
`;
const LoginButton = styled(Button)`
    margin-top: 10px;
    flex: 0 1 80%;
`;
export default class Login extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(StyledLogin, null, /*#__PURE__*/React.createElement("div", {
      className: "login-form"
    }, /*#__PURE__*/React.createElement(LoginInput, {
      placeholder: "Username",
      size: 'md',
      type: "text"
    }), /*#__PURE__*/React.createElement(LoginInput, {
      placeholder: "Password",
      size: 'md',
      type: "password"
    }), /*#__PURE__*/React.createElement(LoginButton, {
      size: 'md',
      label: "Login",
      color: "lightgreen"
    })), /*#__PURE__*/React.createElement("div", {
      className: "create-form"
    }, /*#__PURE__*/React.createElement("h4", null, "Need An Account?"), /*#__PURE__*/React.createElement(LoginButton, {
      size: 'md',
      label: "Create Account",
      color: "cornflowerblue"
    })));
  }

}
;
Login.propTypes = {};
Login.defaultProps = {};
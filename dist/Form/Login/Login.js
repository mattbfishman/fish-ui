import React from 'react';
import styled from 'styled-components';
import * as Styles from './LoginStyles';
import TextField from '../TextField/TextField';
import Button from '../../Button/Button'; // import PropTypes from 'prop-types';

const StyledLogin = styled.div`
    ${Styles.loginBase};
    div{
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        display: flex;
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
    return /*#__PURE__*/React.createElement(StyledLogin, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LoginInput, {
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
    }), /*#__PURE__*/React.createElement(LoginButton, {
      size: 'md',
      label: "Create Account",
      color: "cornflowerblue"
    })));
  }

}
;
Login.propTypes = {};
Login.defaultProps = {};
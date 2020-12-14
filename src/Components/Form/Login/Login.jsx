import React from 'react';
import styled from 'styled-components';
import * as Styles from './LoginStyles';
import TextField from '../TextField/TextField';
import Button from '../../Button/Button';
// import PropTypes from 'prop-types';

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
`

const LoginInput = styled(TextField)`
    margin: 10px auto 10px auto;
    flex: 0 1 80%;
`

const LoginButton = styled(Button)`
    margin-top: 10px;
    flex: 0 1 80%;
`

export default class Login extends React.Component {  
    render() {
        return (
            <StyledLogin>
                <div>
                    <LoginInput placeholder={"Username"} size={'md'} type={"text"} />
                    <LoginInput placeholder={"Password"} size={'md'} type={"password"}/>
                    <LoginButton size={'md'} label={"Login"} color={"lightgreen"}/>
                    <LoginButton size={'md'} label={"Create Account"} color={"cornflowerblue"}/>
                </div>
            </StyledLogin>
        );
    }
};

Login.propTypes = {
}

Login.defaultProps = {
}

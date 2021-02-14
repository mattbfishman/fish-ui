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
                <div className="login-form">
                    <LoginInput placeholder={"Username"} size={'md'} type={"text"} />
                    <LoginInput placeholder={"Password"} size={'md'} type={"password"}/>
                    <LoginButton size={'md'} label={"Login"} color={"lightgreen"}/>
                </div>
                <div className="create-form">
                    <h4>Need An Account?</h4> 
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

import { css } from 'styled-components';
/* styles common to all buttons */

export const buttonBase = css`
    background: #fff;
    border-radius: 5px;
    border: 1px solid lightgray;
    color: #737373;
    outline: none;
    &:hover{
        color: black;
        background-position: left;
    }
`;
/* size variants */

export const sm = css`
    width: 60px;
    height: 30px;
`;
export const md = css`
    width: 80px;
    height: 40px;
`;
export const lg = css`
    width: 100px;
    height: 50px;
`;
export const xl = css`
    width: 120px;
    height: 60px;
`;
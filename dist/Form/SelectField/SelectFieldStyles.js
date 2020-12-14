import { css } from 'styled-components';
/* styles common to all buttons */

export const selectFieldBase = css`
    margin: 50px;
    label{
        text-transform: capitalize;
        padding-right: 10px;
        font-weight: bold;
    }
    select{
        border: 1px solid lightgray;
        border-radius: 5px;
        outline: none;
    }
`;
/* size variants */

export const sm = css`
    min-width: 100px;
`;
export const md = css`
    min-width: 200px;
    min-height: 30px;
`;
export const lg = css`
    min-height: 40px;
    min-width: 300px
`;
export const xl = css`
    min-height: 60px;
    min-width: 400px;
`;
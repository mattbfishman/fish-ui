import { css } from 'styled-components';

/* styles common to all buttons */
export const selectFieldBase = css`
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
    min-width: 300px;
    font-size: 16px;
`;

export const xl = css`
    min-height: 40px;
    min-width: 400px;
    font-size: 16px;
`;
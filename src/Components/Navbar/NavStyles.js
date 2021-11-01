import { css } from 'styled-components';

export const navBase = css`
    width: 100%;
    height: 60px;
`;

export const NavItemBase = css`
    width: 100px;
    text-align: center;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: white;
    }
    cursor: pointer;
`;
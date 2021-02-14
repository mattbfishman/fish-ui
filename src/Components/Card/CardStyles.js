import { css } from 'styled-components';

export const cardBase = css`
    width: 550px;
    height: 300px;
    box-shadow: 0 4px 6px hsl(0deg 0% 0% / 20%);
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    background: #ffffffeb;
    @media (max-width: 480px) {
        width: 100%;
    }

    .title{
        display: flex;
        width: 100%;
        height: 150px;
        flex: 1 0 100%;
        align-items: center;
        padding-left: 20px;
    }

    .header{ 
        justify-self: center;
        display: block;
        align-self: center
    }

    p {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 10px;
        font-size: 16px;
        @media (max-width: 480px) {
            -webkit-line-clamp: 7;
            height: 126px;
        }
    }
`;
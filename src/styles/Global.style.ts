import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "HelveticaNeue", sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
    p {
        padding: 0;
        margin: 0;
    }
    .mt-20 {
        margin-top: 20px;
    }
    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .form {
        flex-direction: column;
        height: 100vh;
        display: flex;
        justify-content: center;
        h3 {
            font-weight: 400;
            font-size: 40px;
            line-height: 48px;
            color: #000000;
            display: flex;
        }
        span {
            font-weight: 700;
        }
    }
`;
export default GlobalStyle;
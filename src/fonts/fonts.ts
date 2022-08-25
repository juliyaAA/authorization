import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'HelveticaNeue';
        src: url('../../src/fonts/HelveticaNeue.woff') format('woff'),
            url('../../src/fonts/HelveticaNeue.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'HelveticaNeue';
        src: url('../../src/fonts/HelveticaNeue-Bold.woff') format('woff'),
            url('../../src/fonts/HelveticaNeue-Bold.woff2') format('woff2');  
        font-weight: 700;
        font-style: normal;
    }
`;

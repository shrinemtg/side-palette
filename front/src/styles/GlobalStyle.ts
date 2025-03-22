import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Klee One';
        src: url('/fonts/KleeOne-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Klee One';
        src: url('/fonts/KleeOne-SemiBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        font-family: 'Klee One', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #f5f5f5;
        color: #333;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

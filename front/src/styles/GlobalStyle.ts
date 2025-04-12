import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Klee One';
        src: url('/fonts/Klee_One/KleeOne-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Klee One';
        src: url('/fonts/Klee_One/KleeOne-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
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

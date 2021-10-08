import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #FFF;
        --background-second: #F9F9F9;
        --background-third: #F4F5FB;
        --background-header: #F4F3F8;

        --text-title: #000000;
        --text-subtitle: #ABABAB;
        
        --card: #F4F4F4;
        
        --white: #FFFFFF;
        --orange: #CD4834;
        --orange-dark: #BC402D;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width:1080px){
            font-size: 93.75%; // 15px
        }

        @media(max-width:720px){
            font-size: 87.5%; // 14px
        }
    }

    body{
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, span{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`;

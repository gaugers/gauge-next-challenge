import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
    body {
        --Black: #000000;
        --Gallery: #F0F0F0;
        --White: #FFFFFF;
        --Downriver: #0B1641;
        --Lipstick: #C70160;
        --Razzmatazz: #CF0A5E;
        --RadicalRed: #FC3D55;
        --Gray: #666666;
        --Silver: #BCBCBC;
        --PinkFade: rgba(199, 1, 96, 0.4849977493286133);        
        
        h1 {
            font-family: 'NexaHeavy';
            font-size: 55px;
            line-height: 60px;

            // Medium devices (tablets, 768px and up)
            @media (min-width: 768px) {
                font-size: 82px;
                line-height: 60px;
            }

            // Large devices (desktops, 992px and up)
            @media (min-width: 992px) {
                font-size: 128px;
                line-height: 100px;
            }
        }

        h2 {
            font-family: 'NexaHeavy';
            font-size: 20px;

            // Medium devices (tablets, 768px and up)
            @media (min-width: 768px) {
                font-size: 24px;
            }

            // Large devices (desktops, 992px and up)
            @media (min-width: 992px) {
                font-size: 32px;
            }
        }

        h3 {
            font-family: 'NexaHeavy';
            font-size: 16px;
            line-height: 22px;

            // Medium devices (tablets, 768px and up)
            @media (min-width: 768px) {
                font-size: 18px;
                line-height: 22px;
            }

            // Large devices (desktops, 992px and up)
            @media (min-width: 992px) {
                font-size: 24px;
            }
        }

        h4 {
            font-family: 'NexaHeavy';
            font-size: 34px;
            line-height: 35px;

            // Medium devices (tablets, 768px and up)
            @media (min-width: 768px) {
                font-size: 85px;
                line-height: 77px;
            }

            // Large devices (desktops, 992px and up)
            @media (min-width: 992px) {
                font-size: 104px;
            }
        }
    }

    footer, header, main, nav, section {
        display: block;
    }

    html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        margin: 0;
        color: var(--Black);
        font-family: 'InfraRegular';
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
        text-align: left;
        background-color: var(--White);

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) {
            font-size: 16px;
            line-height: 25px; 
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    .text-right {
        text-align: right !important;
    }

    .text-center {
        text-align: center !important;
    }

    button {
        border-radius: 0;
    }

    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button {
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button:not(:disabled),
    [type="button"]:not(:disabled),
    [type="reset"]:not(:disabled),
    [type="submit"]:not(:disabled) {
        cursor: pointer;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    img {
        page-break-inside: avoid;
        vertical-align: middle;
        border-style: none;
    }
`

export default GlobalStyles
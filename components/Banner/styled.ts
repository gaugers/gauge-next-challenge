import styled from 'styled-components'
import { Col } from "react-bootstrap"


export const Section = styled.div`
    padding-top: 70px;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        background-size: 100% auto;
        background-image: url('/images/dotted-mobile.jpg');
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: 102px;
        padding-top: 102px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        background-image: url('/images/dotted.jpg');
        background-size: 100% auto;
    }
`

export const BlockCircleBg = styled.div`
    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        background-image: url('/images/banner-bg.svg');
        background-repeat: no-repeat;
        background-size: 1920px 620px;
        background-position-x: center;

        .pb-50 {
            padding-bottom: 50px;
        }
    }
`

export const TitleBlock = styled(Col)`
    z-index: 999;
`

export const Title = styled.h1`
    color: var(--Downriver);

    span {
        font-family: 'NexaLightItalic';
    }
`

export const TechBlock = styled.div`
    background-image: linear-gradient(90deg, var(--RadicalRed) 0%, var(--Razzmatazz) 52.69%, var(--Lipstick) 100%);
    height: 10px;
    position: absolute;
    bottom: 16%;
    z-index: -1;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        left: 0;
        height: 18px;
        bottom: 13%;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        height: 27px;
    }
`

export const Subtitle = styled.h2`
    padding-top: 50px;
    color: var(--Gray);
    text-transform: uppercase;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        padding-top: 70px;
    }
`

export const Text = styled.p`
    color: var(--Gray);
`
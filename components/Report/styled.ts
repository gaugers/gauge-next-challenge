import styled from 'styled-components';
import { Button, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Block1 = styled.div`
    min-height: 500px;
    background-image: url("/images/report-bg1-mobile.jpg");
    background-repeat: no-repeat;
    background-size: auto 500px;
    background-position-x: center;
    margin-bottom: 30px;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      min-height: 648px;
      background-size: 100% 648px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      background-image: url("/images/report-bg1.jpg");
      background-image: unset;
      position: relative;
    }
`

export const ReportBg = styled(LazyLoadImage)`
    position: absolute;
    right: 0;
    top: 0;
`

export const SectionTitle = styled.h2`
    color: var(--Gray);
    text-transform: uppercase;
    padding-bottom: 10px;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        padding-bottom: 30px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding-bottom: 60px;
    }
`

export const Block2 = styled(Col)`
    min-height: 300px;
    padding: 64px 30px;
    background-image: url("/images/report-bg2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 300px;
    background-position-x: center;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        min-height: 648px;
        padding: 64px 63px;
        background-size: 100% 648px;
    }
`

export const Title1 = styled.h4`
    color: var(--White);
    padding-top: 50px;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        padding-top: 140px;
    }
`

export const Title = styled.h2`
    color: var(--White);
`

export const SubTitle1 = styled.p`
    color: var(--White);
    margin-bottom: 16px;
    font-weight: bold;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        margin-top: 20px;
        margin-bottom: 24px;
    }
`

export const SubTitle = styled.p`
    color: var(--White);
    margin-bottom: 16px;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        margin-top: 20px;
        margin-bottom: 24px;
    }
`

export const Text = styled.p`
    color: var(--Silver);

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        padding-top: 35px;
    }
`

export const ButtonDownload = styled(Button)`
    font-family: 'InfraBold';
    background-image: linear-gradient(90deg, var(--RadicalRed) 0%, var(--Razzmatazz) 52.69%, var(--Lipstick) 100%);
    border-radius: 22px;
    width: 100%;
    min-height: 40px;
    color: var(--White);
    text-transform: uppercase;
    border-color: none;
    border: none;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        font-size: 18px;
        letter-spacing: 1.5px;
    }

    &:hover {
        color: var(--White);
        background-color: var(--RadicalRed);
        border-color: var(--RadicalRed);
    }

    &:focus, &.focus {
        color: var(--White);
        background-color: var(--RadicalRed);
        border-color: var(--RadicalRed);
    }
`
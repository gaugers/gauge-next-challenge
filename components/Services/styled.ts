import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';
import Carousel from '@brainhubeu/react-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Section = styled.div`
    padding-top: 50px;
    overflow: hidden;

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding-top: 50px;
    }
`

export const Title = styled.h2`
    color: var(--Gray);
    text-transform: uppercase;
    padding-bottom: 30px;
`

export const Header = styled.div`
    background-image: url("/images/digita-services/consultoria.jpg");
    background-repeat: no-repeat;
    background-size: 85% auto;
    background-position-x: right;
    padding-top: 51px;

    &.socialLab {
        background-image: url("/images/digita-services/social-lab.jpg");
    }

    &.ux {
        background-image: url("/images/digita-services/ux-ui.jpg");
    }

    &.performance {
        background-image: url("/images/digita-services/performance.jpg");
    }
`

export const HeaderTitle = styled.h3`
    background-color: #0B1641;
    color: var(--White);
    width: 90%;
    text-transform: uppercase;
    padding: 30px 20px 20px 35px;
`

export const Body = styled.div`
    padding: 30px 5px 20px 35px;

`
export const Subtitle = styled.p`
    color: var(--Gray);
    font-family: 'InfraExtraBold';
    font-size: 16px;
    text-transform: uppercase;
    line-height: 25px;
`

export const Text = styled.p`
    color: var(--Gray);
`

export const Divider = styled.div`
    background-image: linear-gradient(90deg, #FC3D55 0%, #CF0A5E 52.69%, #C70160 100%);
    width: 27px;
    height: 4px;
    margin-bottom: 16px;
`

export const Module = styled.p`
    font-family: 'InfraSemiBoldItalic';
    color: var(--Lipstick);
    text-transform: uppercase;
`
export const FooterRow = styled(Row)`
    padding: 50px 0;
    position: relative;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        padding: 100px 0;
    }
`

export const Footer = styled.div`
    background-image: linear-gradient(90deg, #FC3D55 0%, #CF0A5E 52.69%, #C70160 100%);
    height: 4px;
    width: 100%;
`

export const Circle = styled(LazyLoadImage)`
    width: 39px;
    height: 39px;
`

export const DivRelative = styled.div`
    position: relative;
`

export const PointBg = styled(LazyLoadImage)`
    position: absolute;
    width: auto;
    height: 200px;
    top: 0%;
    right: 0%;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        height: 400px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width: 175%;
    }
`

export const Column = styled(Col)`
    .BrainhubCarousel__dot {
        padding: 15px;
    }
`

export const CarouselContainer = styled(Carousel)`
    .BrainhubCarousel__dots .BrainhubCarousel__dot:before {
        background-color: var(--Downriver);
    }
`
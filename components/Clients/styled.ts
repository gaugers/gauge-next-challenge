import styled from 'styled-components'
import { Row } from 'react-bootstrap';
import Carousel from '@brainhubeu/react-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Section = styled.div`
    padding: 70px 0;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        padding-top: 100px;
        padding-bottom: 0;
    }
`

export const Title = styled.h2`
    color: var(--Gray);
    text-transform: uppercase;
`

export const Text = styled.p`
    color: var(--Gray);
    padding-top: 35px;
`

export const SecondRow = styled(Row)`
    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding-top: 60px;  
    }
`

export const Img = styled(LazyLoadImage)`
    max-width: 100%;
    width: auto;
    height: auto;
    opacity: 0.65;
`

export const CarouselBlock = styled(Carousel)`
    margin-top: 20px;
    color: var(--Gray); 
`
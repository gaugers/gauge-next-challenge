import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Section = styled.div`
    background-color: var(--Downriver);

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        background-image: linear-gradient(
            90deg,
            var(--Downriver) 50%,
            var(--Gallery) 50%,
            var(--Gallery) 100%
        );
    }
`

export const Content = styled(Container)`
    background-color: var(--Downriver);
`

export const TracoImg = styled(LazyLoadImage)`
    position: absolute;
    right: -5px;
    top: -52px;
`

export const Block = styled(Row)`
    padding-top: 104px;
    padding-bottom: 50px;

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding-bottom: 199px; 
    }
`

export const Logo = styled(LazyLoadImage)`
    width: 100%;
    height: auto;
`

export const Icone = styled(LazyLoadImage)`
    width: 22px;
    height: 27px;
`

export const Contact = styled.div`
    margin-left: 10px; 

    p {
        color: var(--White);
        line-height: 19px;
    }
`

export const IconMidia = styled(LazyLoadImage)`
    width: 60px;
    height: 60px;
`

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    position: relative;
    border: solid 2px transparent; /* !importanté */
    border-radius: 100%;

    &:before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        margin: -2px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(to bottom, var(--RadicalRed), var(--Razzmatazz), var(--Lipstick));
    }

    &:after {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        margin: 0; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: var(--Downriver);
    }

    img {
        width: 25px;
        height: 25px;
        z-index: 999999;

        &:hover {
            filter: invert(72%) sepia(130%) saturate(2892%) hue-rotate(320deg) brightness(97%) contrast(97%);
        }
    }
`
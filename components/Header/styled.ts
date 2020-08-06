import styled from 'styled-components'
import { Navbar, Col } from "react-bootstrap"
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const HeaderNavBar = styled(Navbar)<{ fixed?: boolean }>`
    box-shadow: 0 0.25rem 0.125rem 0 rgba(0,0,0,0.05);

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        box-shadow: unset;
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        background-color: var(--${props => props.fixed ? 'Downriver' : 'White'});
        top: 0;
        right: 0;
        left: 0;
        position: ${props => props.fixed ? 'fixed' : 'inherit'};
        z-index: 2000;
        transition-property: position 4s linear;
    }
`

export const Header = styled.div<{ fixed: boolean }>`
    display: flex;
    align-items: center;
    min-height: 90px;

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        height: ${props => props.fixed ? '90px' : '150px'};
    }
`

export const Image = styled(LazyLoadImage)`
    width: 100%;
    height: auto;
`

export const Line = styled.div`
    background-image: linear-gradient(90deg, var(--RadicalRed) 0%, var(--Razzmatazz) 52.69%, var(--Lipstick) 100%);
    width: 100%;
    height: 4px;
`

export const Link = styled.a<{ fixed: boolean }>`
    font-family: 'InfraSemiBold';
    font-size: 18px;
    color: var(--${props => props.fixed ? 'White' : 'Downriver'});
    text-decoration: none;

    &:hover {
        color: var(--${props => props.fixed ? 'White' : 'Downriver'});
        text-decoration: underline;
    }
`

export const MobileLinks = styled(Col)`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Section = styled.div<{ height: number }>`
    padding: 50px 0;

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding-top: 100px;
    }

    .row {
        min-height: ${props => `${props.height}px`};
    }
`

export const Title = styled.h4`
    color: var(--Downriver);
    display: flex;
    flex-direction: column;
    text-align: center;

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        flex-direction: row;
    }
`

export const Text = styled.span`
    color: var(--Lipstick);
`

export const Circle = styled(LazyLoadImage)`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
`
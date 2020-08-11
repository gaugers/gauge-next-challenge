import styled from 'styled-components'
import { Col, Form, Button } from 'react-bootstrap';
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";


export const Section = styled.div`
    position: relative;
    padding-top: 50px;
    padding-bottom: 100px;
    background-color: var(--Gallery);

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        background-size: 100% 350px;
        background-image: url('/images/dotted-right-mobile.webp');
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: 110px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        background-image: url('/images/dotted-right.webp');
        background-size: 100% auto;
        background-position-y: 80px;
    }
`

export const Title = styled.h2`
    color: var(--Lipstick);
    font-family: "NexaHeavy";
    font-size: 35px;
    line-height: 45px;

    br {
        display: none;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        font-size: 56px;

        br {
            display: block;
        }
    }
`

export const TextHelp = styled(Col)`
    text-align: end;
    font-size: 12px;
    color: var(--Gray);
`

export const FormGroup = styled(Form.Group)<{ isValid: boolean }>`
    background-color: var(--White);
    border-radius: 4px;
    margin-bottom: 1.5rem;
    min-height: 64px;
    border: ${props => props.isValid ? 'unset' : '1px solid var(--Lipstick)'};
    box-shadow: ${props => props.isValid ? 'unset' : '1px 0 6px 0 rgba(199, 1, 96, 0.48)'};
`

export const Label = styled(Form.Label)<{ isValid: boolean }>`
    color: var(--${props => props.isValid ? 'Gray' : 'Lipstick'});
    font-size: 12px;
    margin-bottom: 0;
    width: 100%;
    padding: 5px .75rem 0 .75rem;

    span {
        color: var(--Lipstick);
    }
`

export const Field = styled(Form.Control)`
    color: var(--Downriver);
    text-align: left;
    border: unset;
    width: 100%;
    background: transparent;
    padding: .375rem .75rem;
`

export const SubmitButton = styled(Button)`
    background-image: linear-gradient(90deg, var(--RadicalRed) 0%, var(--Razzmatazz) 52.69%, var(--Lipstick) 100%);
    color: var(--White);
    border: unset;
    border-radius: 22px;
    width: 100%;
    min-height: 48px;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        color: var(--White);
        box-shadow: 1px 0 6px 0 rgba(199, 1, 96, 0.48);
    }
`

export const MessageSuccess = styled.div`
    color: var(--White);
    background-image: linear-gradient(#36FFCE 0%, #16857B 100%);
    display: flex;
    font-weight: 700;
    min-height: 60px;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
    }
`

export const MessageError = styled.div`
    color: var(--White);
    background-image: linear-gradient(var(--Razzmatazz) 0%, var(--Lipstick) 100%);
    display: flex;
    font-weight: 700;
    min-height: 60px;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
    }
`

export const Recaptcha = styled(ReCAPTCHA)`
    transform: scale(0.80);
    -webkit-transform: scale(0.80);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
`

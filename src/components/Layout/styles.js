import styled from 'styled-components'
import Image from '../../assets/bg1.jpg'

export const IronBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        linear-gradient(to bottom, rgba(27, 27, 27, 0), rgba(29, 29, 29, 0.8)),
        linear-gradient(to left, rgba(111, 36, 187, 0.65), rgba(114, 114, 114, 0)),
        linear-gradient(to right bottom, rgba(88, 201, 226, 0.7), rgba(114, 114, 114, 0)),
        linear-gradient(to left top, rgba(184, 36, 187, 0.35), rgba(114, 114, 114, 0)),
        url(${Image});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::after {
        content: '';
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 1;
        background-image: url(${Image});
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.15;
    }
`
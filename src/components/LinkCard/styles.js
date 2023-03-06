import styled, { keyframes } from 'styled-components'

const tilt = keyframes`
    0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
        color: rgba(255, 255, 255, 0.2);
        text-shadow: none;
        box-shadow: 0 0 30px rgba(246, 129, 221, 0.07),
            0 0 14px rgba(222, 89, 243, 0.06),
            0 0 18px rgba(222, 89, 243, 0.08),
            0 0 4px rgba(255, 255, 255, 0.07),
            0 0 2px rgba(255, 255, 255, 0.095),
            inset 0 0 2px rgba(255, 255, 255, 0.095),
            inset 0 0 20px rgba(222, 89, 243, 0.06),
            inset 0 0 14px rgba(246, 129, 221, 0.04),
            inset 0 0 4px rgba(255, 255, 255, 0.07);
    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100% {
        color: #fff;
        text-shadow: 0 0 10px #FFF,
            0 0 40px #FFF,
            0 0 160px #FFF;  
        box-shadow: 0 0 30px rgba(246, 129, 221, 0.7),
            0 0 14px rgba(222, 89, 243, 0.6),
            0 0 18px rgba(222, 89, 243, 0.8),
            0 0 4px rgba(255, 255, 255, 0.7),
            0 0 2px rgba(255, 255, 255, 0.95),
            inset 0 0 2px rgba(255, 255, 255, 0.95),
            inset 0 0 20px rgba(222, 89, 243, 0.6),
            inset 0 0 14px rgba(246, 129, 221, 0.4),
            inset 0 0 4px rgba(255, 255, 255, 0.7);
    }
`

const tilt_img = keyframes`
    0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
        opacity: 0.1;
    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100% {
        opacity: 1;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    z-index: 2;
`;

export const Card = styled.a`
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    max-width: 15.625rem;
    margin-bottom: 25px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-shadow: 0 0 10px #FFF,
        0 0 40px #FFF,
        0 0 160px #FFF;  
    cursor: pointer;
    transition: 0.2s ease all;
    box-shadow: 0 0 30px rgba(246, 129, 221, 0.7),
        0 0 14px rgba(222, 89, 243, 0.6),
        0 0 18px rgba(222, 89, 243, 0.8),
        0 0 4px rgba(255, 255, 255, 0.7),
        0 0 2px rgba(255, 255, 255, 0.95),
        inset 0 0 2px rgba(255, 255, 255, 0.95),
        inset 0 0 20px rgba(222, 89, 243, 0.6),
        inset 0 0 14px rgba(246, 129, 221, 0.4),
        inset 0 0 4px rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(1px);

    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
    }
    &:nth-child(2) {
        box-shadow: 0 0 30px rgba(129, 225, 246, 0.7),
        0 0 14px rgba(129, 225, 246, 0.6),
        0 0 18px rgba(129, 225, 246, 0.8),
        0 0 4px rgba(255, 255, 255, 0.7),
        0 0 2px rgba(255, 255, 255, 0.95),
        inset 0 0 2px rgba(255, 255, 255, 0.95),
        inset 0 0 20px rgba(129, 225, 246, 0.6),
        inset 0 0 14px rgba(129, 225, 246, 0.4),
        inset 0 0 4px rgba(255, 255, 255, 0.7);
    }
    &:nth-child(3) {
        transform: rotateZ(6deg);
        animation: ${tilt} 5s linear infinite;
        img {
            animation: ${tilt_img} 5s linear infinite;
        }
    }
    img {
        padding-right: 1rem;
        text-shadow: 0 0 4px #FFF;
        height: 40px;
        width: 40px;
    }
`;


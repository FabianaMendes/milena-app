import styled from 'styled-components'

export const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;

    h1 {
        padding: 15px 0 5px;
        color: #FFF;
        font-size: 1.25rem;
        font-weight: 800;
    }
    p{
        padding-bottom: 20px;
        color: #CDCDCD;
        font-size: 0.875rem;
    }
    h6 {
        text-align: center;
        color: #FFF;
        text-shadow: 0 0 4px #FFF;
        font-weight: 400;
        font-size: 0.875rem;
        padding-bottom: 3.125rem;
    }
`

export const Image = styled.img`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.9),
        0px 0px 10px rgba(129, 225, 246, 0.6),
        0px 0px 12px rgba(129, 225, 246, 0.5),
        0px 0px 15px rgba(129, 225, 246, 0.4),
        0px 0px 20px rgba(129, 225, 246, 0.3),
        0px 0px 25px rgba(129, 225, 246, 0.2);
`
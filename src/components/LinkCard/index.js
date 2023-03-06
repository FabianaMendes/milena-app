import React from 'react'
import twitterImg from '../../assets/twitter.svg';
import instaImg from '../../assets/instagram.svg';
import opggImg from '../../assets/opgg.svg';
import { Container, Card } from './styles'

export default function LinkCard() {
    return (
        <Container>
            <Card href="https://twitter.com/Chary_lol" target="_blank" rel="noreferrer">
                <img src={twitterImg} alt="" />
                Twitter
            </Card>
            <Card href="https://www.instagram.com/chary_lol/" target="_blank" rel="noreferrer">
                <img src={instaImg} alt="" />
                Instagram
            </Card>
            <Card href="https://www.op.gg/summoners/br/J3tGinxed" target="_blank" rel="noreferrer">
                <img src={opggImg} alt="" />
                Op.gg
            </Card>
        </Container>
    )
}
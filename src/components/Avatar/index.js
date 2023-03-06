import React from 'react'
import { AvatarContainer, Image } from './styles'

export function Avatar({ image, title, subtitle, bio }) {
    return (
        <AvatarContainer>
            <Image src={image} />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <h6>{bio}</h6>
        </AvatarContainer>
    )
}
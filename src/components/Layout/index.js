import React from 'react'
import { IronBackground } from './styles'


export default function Layout({ children }) {
    return (
        <IronBackground>
            {children}
        </IronBackground>
    )
}
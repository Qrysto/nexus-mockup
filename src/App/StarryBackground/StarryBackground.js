/**
 * Inspired by https://www.script-tutorials.com/night-sky-with-twinkling-stars/
 */
import React from 'react'
import styled, { keyframes } from 'react-emotion/macro'
import starImg from './stars.jpg'
import twinklingImg from './twinkling.png'

const twinkling = keyframes`
    from { transform: translate(0, 0) }
    to { transform: translate(1000px, 0) }
`

const Stars = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `#000 url(${starImg}) repeat top center`
})

const Twinkling = styled.div({
    position: 'absolute',
    top: 0,
    left: -1000,
    right: 0,
    bottom: 0,
    background: `transparent url(${twinklingImg}) repeat top center`,
    animation: `${twinkling} 60s linear infinite`
})

const StarryBackground = () => (
    <Stars>
        <Twinkling />
    </Stars>
)

export default StarryBackground

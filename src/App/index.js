import React from 'react'
import StarryBackground from './StarryBackground'
import Header from './Header'
import LaunchPad from './LaunchPad'
import styled from 'react-emotion/macro'

const Overlay = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
})

const App = () => (
    <div>
        <StarryBackground />
        <Overlay>
            <Header />
            <LaunchPad />
        </Overlay>
    </div>
)

export default App

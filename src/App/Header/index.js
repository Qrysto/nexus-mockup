import React from 'react'
import logoImg from './nexus-logo.png'
import styled from 'react-emotion/macro'

const Logo = styled.img({
    margin: '20px auto',
    textAlign: 'center',
    display: 'block',
    height: 50
})

const Line = styled.div({
    width: '80%',
    height: 4,
    margin: '0 auto',
    backgroundImage:
        '-webkit-linear-gradient(left, transparent 0%, #0ca4fb 50%, transparent 100%)'
})

const Header = () => (
    <div>
        <Logo src={logoImg} alt="Nexus" />
        <Line />
    </div>
)

export default Header

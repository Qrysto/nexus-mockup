import React from 'react'
import nexusSvg from './nexus.svg'
import styled, { css } from 'react-emotion/macro'

const Navigation = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0 30px'
})

const Line = styled.div({
    width: '60%',
    height: 2,
    margin: '0 auto',
    backgroundImage:
        '-webkit-linear-gradient(left, transparent 0%, #0ca4fb 50%, transparent 100%)'
})

const icon = css({
    height: 40,
    opacity: 0.8,
    transition: 'opacity .2s',
    cursor: 'pointer',
    '&:hover': {
        opacity: 1
    }
})

const Wrapper = styled.div({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
})

const Header = () => (
    <Wrapper>
        <Line />
        <Navigation>
            <img className={icon} src={nexusSvg} alt="Dashboard" />
        </Navigation>
    </Wrapper>
)

export default Header

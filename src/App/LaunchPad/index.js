import React from 'react'
import SvgIcon from 'components/SvgIcon'
import SvgSprite from './SvgSprite'
import styled from 'react-emotion/macro'
import { primaryColor } from 'consts'

const Navigation = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0 30px'
})

const Line = styled.div({
    width: '60%',
    height: 2,
    margin: '0 auto',
    backgroundImage: `-webkit-linear-gradient(left, transparent 0%, ${primaryColor} 50%, transparent 100%)`
})

const Icon = styled(SvgIcon)({
    height: 40,
    width: 40,
    opacity: 0.7,
    transform: 'scale(.9)',
    transition: 'opacity .2s, transform .2s',
    cursor: 'pointer',
    fill: '#fff',
    margin: '0 10px',
    '&:hover': {
        opacity: 1,
        transform: 'scale(1)'
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
        <SvgSprite />
        <Line />
        <Navigation>
            <Icon icon="nexus-logo" />
            <Icon icon="send" />
            <Icon icon="transactions" />
            <Icon icon="chart" />
            <Icon icon="address-book" />
            <Icon icon="settings" />
            <Icon icon="console" />
            <Icon icon="shapeshift" />
            <Icon icon="hand-shake" />
        </Navigation>
    </Wrapper>
)

export default Header

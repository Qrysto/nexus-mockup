import React from 'react'
import SvgIcon from 'components/SvgIcon'
import styled from 'react-emotion/macro'
import { primaryColor } from 'consts'

const Navigation = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0 25px'
})

const Line = styled.div({
    width: '60%',
    height: 2,
    margin: '0 auto',
    backgroundImage: `-webkit-linear-gradient(left, transparent 0%, ${primaryColor} 50%, transparent 100%)`
})

const Icon = styled(SvgIcon)(
    {
        height: 36,
        width: 36,
        transition: 'opacity .2s, transform .2s',
        cursor: 'pointer',
        margin: '0 10px',
        '&:hover': {
            opacity: 1,
            transform: 'translateY(-5px)'
        }
    },
    ({ active }) => ({
        fill: active ? primaryColor : '#fff',
        opacity: active ? 1 : 0.7
    })
)

const Header = () => (
    <div>
        <Line />
        <Navigation>
            <Icon icon="nexus-logo" />
            <Icon icon="send" />
            <Icon icon="transactions" />
            <Icon icon="chart" />
            <Icon icon="address-book" active />
            <Icon icon="settings" />
            <Icon icon="console" />
            <Icon icon="shapeshift" />
            <Icon icon="hand-shake" />
        </Navigation>
    </div>
)

export default Header

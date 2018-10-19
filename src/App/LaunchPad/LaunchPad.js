import React from 'react'
import SvgIcon from 'components/SvgIcon'
import Button from 'components/Inputs/Button'
import styled from 'react-emotion/macro'
import { primaryColor } from 'consts'

const Navigation = styled.div({
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 8
})

const Line = styled.div({
    width: '60%',
    height: 2,
    margin: '0 auto',
    backgroundImage: `-webkit-linear-gradient(left, transparent 0%, ${primaryColor} 50%, transparent 100%)`
})

const NavItem = styled(Button)(
    {
        padding: '0 10px',
        height: 66,
        transitionProperties: 'opacity, transform',
        '&:hover': {
            transform: 'translateY(-5px)'
        }
    },
    ({ active }) =>
        !!active && {
            opacity: 1
        }
)

const Icon = styled(SvgIcon)(
    {
        height: 36,
        width: 36
    },
    ({ active }) =>
        !!active && {
            fill: primaryColor
        }
)

const Header = () => (
    <div>
        <Line />
        <Navigation>
            <NavItem invisLight>
                <Icon icon="nexus-logo" />
            </NavItem>
            <NavItem invisLight>
                <Icon icon="send" />
            </NavItem>
            <NavItem invisLight>
                <Icon icon="transactions" />
            </NavItem>
            <NavItem invisLight>
                <Icon icon="chart" />
            </NavItem>
            <NavItem invisLight active>
                <Icon icon="address-book" active />
            </NavItem>
            <NavItem invisLight>
                <Icon icon="settings" />
            </NavItem>
            <NavItem invisLight>
                <Icon icon="console" />
            </NavItem>
            <NavItem invisLight>
                <Icon icon="shapeshift" />
            </NavItem>
            <NavItem invisLight>
                <Icon icon="hand-shake" />
            </NavItem>
        </Navigation>
    </div>
)

export default Header

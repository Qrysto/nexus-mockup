import React from 'react'
import SvgIcon from 'components/SvgIcon'
import Button from 'components/Inputs/Button'
import HorizontalLine from 'components/HorizontalLine'
import styled, { keyframes } from 'react-emotion/macro'
import { primaryColor, easeOutMore } from 'consts'

const intro = keyframes`
    from { 
        transform: translateY(50%);
        opacity: 0 
    }
    to { 
        transform: translateY(0);
        opacity: .8
    }
`

const Navigation = styled.div({
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 8,
    animation: `${intro} 1s ${easeOutMore}`
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

const LaunchPad = ({ activePage, navigate }) => (
    <div>
        <HorizontalLine width="60%" />
        <Navigation>
            <NavItem
                invisLight
                active={activePage === 'home'}
                onClick={() => {
                    navigate('home')
                }}
            >
                <Icon icon="nexus-logo" active={activePage === 'home'} />
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
            <NavItem
                invisLight
                active={activePage === 'addressBook'}
                onClick={() => {
                    navigate('addressBook')
                }}
            >
                <Icon
                    icon="address-book"
                    active={activePage === 'addressBook'}
                />
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

export default LaunchPad

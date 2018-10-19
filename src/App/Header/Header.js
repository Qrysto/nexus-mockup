import React from 'react'
import SvgIcon from 'components/SvgIcon'
import HorizontalLine from 'components/HorizontalLine'
import styled, { keyframes } from 'react-emotion/macro'
import { primaryColor, easeOutMore } from 'consts'

const intro = keyframes`
    from { 
        transform: scale(0.5);
        opacity: 0 
    }
    to { 
        transform: scale(1);
        opacity: 1
    }
`

const HeaderContent = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
    animation: `${intro} 1s ${easeOutMore}`
})

const LogoWrapper = styled.div({
    position: 'relative'
})

const Logo = styled(SvgIcon)({
    height: 50,
    fill: primaryColor
})

const Beta = styled.div({
    color: 'white',
    fontSize: 12,
    position: 'absolute',
    bottom: 4,
    right: 15,
    letterSpacing: 1,
    textTransform: 'uppercase'
})

const Header = () => (
    <div>
        <HeaderContent>
            <LogoWrapper>
                <Logo icon="nexus-logo-full" />
                <Beta>beta</Beta>
            </LogoWrapper>
        </HeaderContent>
        <HorizontalLine width="80%" />
    </div>
)

export default Header

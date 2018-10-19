import React from 'react'
import SvgIcon from 'components/SvgIcon'
import HorizontalLine from 'components/HorizontalLine'
import styled, { keyframes } from 'react-emotion/macro'
import { primaryColor, easeOutMore } from 'consts'

const fadeInAndExpand = keyframes`
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
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0'
})

const LogoWrapper = styled.div({
    position: 'relative',
    animation: `${fadeInAndExpand} 1s ${easeOutMore}`
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

const fadeIn = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
`

// const Account = styled.div({
//     position: 'absolute',
//     left: 30,
//     top: 30,
//     animation: `${fadeIn} 1s ${easeOutMore}`
// })

const Statuses = styled.div({
    position: 'absolute',
    right: 30,
    top: 30,
    display: 'flex',
    animation: `${fadeIn} 1s ${easeOutMore}`
})

const Status = styled(SvgIcon)({
    margin: '0 6px',
    fill: primaryColor,
    cursor: 'pointer',
    width: 20,
    height: 20
})

const Header = () => (
    <div>
        <HeaderContent>
            <LogoWrapper>
                <Logo icon="nexus-logo-full" />
                <Beta>beta</Beta>
            </LogoWrapper>
            <Statuses>
                <Status icon="lock" />
                <Status icon="staking" />
                <Status icon="check" />
                <Status icon="user" />
            </Statuses>
        </HeaderContent>
        <HorizontalLine width="80%" />
    </div>
)

export default Header

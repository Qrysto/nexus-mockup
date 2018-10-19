import React from 'react'
import SvgIcon from 'components/SvgIcon'
import SvgSprite from './SvgSprite'
import styled from 'react-emotion/macro'
import { primaryColor } from 'consts'

const HeaderContent = styled.div({
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0'
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

const Line = styled.div({
    width: '80%',
    height: 2,
    margin: '0 auto',
    backgroundImage: `-webkit-linear-gradient(left, transparent 0%, ${primaryColor} 50%, transparent 100%)`
})

const Header = () => (
    <div>
        <SvgSprite />
        <HeaderContent>
            <LogoWrapper>
                <Logo icon="nexus-logo-full" />
                <Beta>beta</Beta>
            </LogoWrapper>
        </HeaderContent>
        <Line />
    </div>
)

export default Header

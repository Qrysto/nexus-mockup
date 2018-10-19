import React, { Component } from 'react'
import SvgSprite from './SvgSprite'
import StarryBackground from './StarryBackground'
import Header from './Header'
import LaunchPad from './LaunchPad'
import AddressBook from './AddressBook'
import styled from 'react-emotion/macro'

const Overlay = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
})

const HeaderWrapper = styled.div({
    flexShrink: 0
})

const LaunchPadWrapper = styled.div({
    flexShrink: 0
})

const ContentWrapper = styled.div({
    flexGrow: 1,
    padding: '30px 10%',
    display: 'flex',
    alignItems: 'stretch'
})

class App extends Component {
    state = {
        activePage: 'home'
    }

    setPage = page => {
        this.setState({ activePage: page })
    }

    render() {
        const content =
            this.state.activePage === 'addressBook' ? <AddressBook /> : null

        return (
            <div>
                <SvgSprite />
                <StarryBackground />
                <Overlay>
                    <HeaderWrapper>
                        <Header />
                    </HeaderWrapper>
                    <ContentWrapper>{content}</ContentWrapper>
                    <LaunchPadWrapper>
                        <LaunchPad
                            activePage={this.state.activePage}
                            navigate={this.setPage}
                        />
                    </LaunchPadWrapper>
                </Overlay>
            </div>
        )
    }
}

export default App

import styled from 'react-emotion/macro'

const HyperLink = styled.a({
    outline: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    opacity: 0.8,
    transition: 'opacity .2s',
    '&:hover, &:active': {
        opacity: 1
    }
})

export default HyperLink

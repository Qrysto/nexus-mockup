import styled, { keyframes } from 'react-emotion/macro'
import { primaryColor, easeOutMore } from 'consts'

const expand = keyframes`
    from { transform: scale(0, 1) }
    to { transform: scale(1, 1) }
`

const Line = styled.div(
    {
        height: 2,
        margin: '0 auto',
        backgroundImage: `-webkit-linear-gradient(left, transparent 0%, ${primaryColor} 50%, transparent 100%)`,
        animation: `${expand} 1s ${easeOutMore}`
    },
    ({ width = '60%' }) => ({
        width
    })
)

export default Line

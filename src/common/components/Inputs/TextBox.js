import styled from 'react-emotion/macro'
import { darkColor, lightColor } from 'consts'

const TextBox = styled.input(
    {
        backgroundColor: lightColor,
        color: darkColor,
        borderRadius: 2,
        padding: '0 15px',
        border: 'none',
        outline: 'none',
        height: '2.28em',
        opacity: 0.8,
        transition: 'opacity .2s',
        '&:hover, &:focus, &:hover + button, &:focus + button': {
            opacity: 1
        }
    },
    ({ groupedLeft }) =>
        !!groupedLeft && {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        }
)

export default TextBox

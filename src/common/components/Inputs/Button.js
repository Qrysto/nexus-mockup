import styled from 'react-emotion/macro'
import { primaryColor, oppositePrimaryColor } from 'consts'
import { lightColor, darkColor } from '../../consts'

const Button = styled.button(
    {
        borderRadius: 2,
        padding: '0 15px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        height: '2.28em',
        opacity: 0.9,
        transition: 'opacity .2s',
        '&:hover': {
            opacity: 1
        }
    },
    ({ groupedRight }) =>
        !!groupedRight && {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
        },
    ({ primary }) =>
        !!primary && {
            backgroundColor: primaryColor,
            color: oppositePrimaryColor
        },
    ({ light }) =>
        !!light && {
            backgroundColor: lightColor,
            color: darkColor
        },
    ({ invisLight }) =>
        !!invisLight && {
            backgroundColor: 'transparent',
            color: lightColor
        }
)

export default Button

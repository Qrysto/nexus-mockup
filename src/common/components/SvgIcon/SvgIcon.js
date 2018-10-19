import React from 'react'
import styled from 'react-emotion/macro'

const Svg = styled.svg({
    fill: 'currentColor',
    stroke: 'currentColor',
    verticalAlign: 'middle',
    transitionProperty: 'fill, stroke',
    transitionDuration: '.2s'
})

const SvgIcon = ({ icon, ...rest }) => (
    <Svg {...rest}>
        <use xlinkHref={`#icon-${icon}`} />
    </Svg>
)

export default SvgIcon

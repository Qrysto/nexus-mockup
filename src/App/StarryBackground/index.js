import React from 'react';
import styled, { css, keyframes } from 'react-emotion/macro';
import starImg from './stars.png';
import twinklingImg from './twinkling.png';

const twinkling = keyframes`
    from { transform: translate(0, 0) }
    to { transform: translate(1000px, 0) }
`;

const fullScreen = css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
});

const Stars = styled.div(
    fullScreen,
    {
        background: `#000 url(${starImg}) repeat top center`
    }
);

const Twinkling = styled.div(
    fullScreen,
    {
        background: `transparent url(${twinklingImg}) repeat top center`,
        animation: `${twinkling} 60s linear infinite`,
        left: -1000
    }
)

const StarryBackground = () => (
    <div>
        <Stars />
        <Twinkling />
    </div>
);

export default StarryBackground;
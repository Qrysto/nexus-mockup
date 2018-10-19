import React from 'react'
import styled from 'react-emotion/macro'
import SvgIcon from 'components/SvgIcon'
import { vAlign } from 'styles'
import { darkColor, lightColor } from 'consts'

const borderRadius = 4

const ModalHeader = styled.div({
    backgroundColor: darkColor,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    flexShrink: 0,
    padding: '10px 30px',
    fontSize: 28,
    fontWeight: 200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const ModalBody = styled.div({
    backgroundColor: darkColor,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    opacity: 0.7,
    flexGrow: 1,
    padding: '10px 20px',
    overflowY: 'overlay'
})

const ModalWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    color: lightColor,
    width: '100%'
})

const Modal = ({ icon, title, controls, children }) => (
    <ModalWrapper>
        <ModalHeader>
            <div>
                {!!icon && [
                    <SvgIcon icon={icon} width={28} height={28} />,
                    ' '
                ]}
                <span className={vAlign}>{title}</span>
            </div>
            {!!controls && controls}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
    </ModalWrapper>
)

export default Modal

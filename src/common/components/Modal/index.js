import React from 'react'
import styled from 'react-emotion/macro'
import SvgIcon from 'components/SvgIcon'
import { vAlign } from 'styles'
import { darkColor, lightColor } from 'consts'

const ModalHeader = styled.div({
    backgroundColor: darkColor,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    flexShrink: 0,
    padding: '10px 20px',
    fontSize: 28,
    fontWeight: 200
})

const ModalBody = styled.div({
    backgroundColor: darkColor,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    opacity: 0.8,
    flexGrow: 1
})

const ModalWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    color: lightColor,
    width: '100%'
})

const Modal = ({ icon, title }) => (
    <ModalWrapper>
        <ModalHeader>
            {!!icon && (
                <span>
                    <SvgIcon icon={icon} width={28} height={28} />
                    &nbsp;
                </span>
            )}
            <span className={vAlign}>{title}</span>
        </ModalHeader>
        <ModalBody />
    </ModalWrapper>
)

export default Modal

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
    fontWeight: 200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const ModalBody = styled.div({
    backgroundColor: darkColor,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    opacity: 0.7,
    flexGrow: 1
})

const ModalWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    color: lightColor,
    width: '100%'
})

const Modal = ({ icon, title, controls }) => (
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
        <ModalBody />
    </ModalWrapper>
)

export default Modal

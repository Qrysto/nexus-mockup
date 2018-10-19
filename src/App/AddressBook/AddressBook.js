import React from 'react'
import Modal from 'components/Modal'
import TextBox from 'components/Inputs/TextBox'
import Button from 'components/Inputs/Button'
import HyperLink from 'components/Inputs/HyperLink'
import SvgIcon from 'components/SvgIcon'
import styled, { css } from 'react-emotion/macro'
import { vAlign } from 'styles'

const Controls = styled.div({
    display: 'flex',
    alignItems: 'center'
})

const EmptyMessage = styled.div({
    opacity: 0.5
})

const AddressBook = () => (
    <Modal
        icon="address-book"
        title="Address Book"
        controls={
            <Controls>
                <Button invisLight>
                    <SvgIcon icon="add-contact" width="1.5em" height="1.5em" />
                </Button>
                <Button invisLight>
                    <SvgIcon icon="import" width="1.5em" height="1.5em" />
                </Button>
                <Button invisLight className={css({ marginRight: 15 })}>
                    <SvgIcon icon="export" width="1.5em" height="1.5em" />
                </Button>
                <div className={css({ display: 'flex', alignItems: 'center' })}>
                    <TextBox placeholder="Search Contact" groupedLeft />
                    <Button light groupedRight>
                        <SvgIcon icon="search" width="1em" height="1em" />
                    </Button>
                </div>
            </Controls>
        }
    >
        <div
            className={css({
                marginTop: 30,
                textAlign: 'center',
                fontWeight: 200
            })}
        >
            <EmptyMessage>Your address book is empty</EmptyMessage>
            <HyperLink>
                <SvgIcon icon="plus" width=".8em" height=".8em" />
                <span className={vAlign}> Add Contact</span>
            </HyperLink>
        </div>
    </Modal>
)

export default AddressBook

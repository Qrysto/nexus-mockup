import React from 'react'
import Modal from 'components/Modal'
import TextBox from 'components/Inputs/TextBox'
import Button from 'components/Inputs/Button'
import SvgIcon from 'components/SvgIcon'
import styled, { css } from 'react-emotion/macro'

const Controls = styled.div({
    display: 'flex',
    alignItems: 'center'
})

const AddressBook = () => (
    <Modal
        icon="address-book"
        title="Address Book"
        controls={
            <Controls>
                <Button invisLight>
                    <SvgIcon icon="export" width="1.5em" height="1.5em" />
                </Button>
                <Button invisLight className={css({ marginRight: 15 })}>
                    <SvgIcon icon="import" width="1.5em" height="1.5em" />
                </Button>
                <div className={css({ display: 'flex', alignItems: 'center' })}>
                    <TextBox placeholder="Search Contact" groupedLeft />
                    <Button light groupedRight>
                        <SvgIcon icon="search" width="1em" height="1em" />
                    </Button>
                </div>
            </Controls>
        }
    />
)

export default AddressBook

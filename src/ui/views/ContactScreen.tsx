import React, { type ReactElement } from 'react'
import TextField from '@components/common/TextField'

const ContactScreen = (): ReactElement => {
    return (
        <div
            className={'banner-screen'}
        >
            <TextField
                placeholder={'Email'}
            />
        </div>
    )
}

export default ContactScreen

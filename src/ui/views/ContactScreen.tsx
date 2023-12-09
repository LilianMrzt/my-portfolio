import React, { type ReactElement, useState } from 'react'
import TextField from '@components/common/TextField'
import TextArea from '@components/common/TextArea'

const ContactScreen = (): ReactElement => {
    const [email, setEmail] = useState('')
    const [object, setObject] = useState('')
    const [content, setContent] = useState('')

    return (
        <div
            className={'banner-screen'}
        >
            <div className={'w-50 d-flex flex-column gap-30'}>
                <TextField
                    placeholder={'Email'}
                    className={'flex-1'}
                    value={email}
                    setValue={setEmail}
                />
                <TextField
                    placeholder={'Objet'}
                    className={'flex-1'}
                    value={object}
                    setValue={setObject}
                />
                <TextArea
                    placeholder={'Contenu'}
                    className={'flex-1'}
                    value={content}
                    setValue={setContent}
                />
            </div>
        </div>
    )
}

export default ContactScreen

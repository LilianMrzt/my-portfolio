import React, { type ReactElement, useState } from 'react'
import TextField from '@components/common/TextField'
import Button from '@components/common/Button'
import Text from '@components/common/Text'

const ContactScreen = (): ReactElement => {
    const [email, setEmail] = useState('')
    const [object, setObject] = useState('')
    const [content, setContent] = useState('')

    return (
        <div
            className={'banner-screen'}
        >
            <div className={'w-50 d-flex flex-column gap-30 align-center'}>
                <div className={'text-center'}>
                    <Text
                        size={'large'}
                        className={'mb'}
                    >
                        Merci de prendre le temps de me contacter!
                    </Text>
                    <Text
                        size={'large'}
                        className={'mb'}
                    >
                        Comment puis-je vous aider?
                    </Text>
                </div>
                <TextField
                    placeholder={'john.doe@email.com'}
                    className={'w-100'}
                    value={email}
                    setValue={setEmail}
                    label={'Email'}
                />
                <TextField
                    placeholder={'L\'objet de votre message'}
                    className={'w-100'}
                    value={object}
                    setValue={setObject}
                    label={'Objet'}
                />
                <TextField
                    placeholder={'Votre message'}
                    className={'w-100'}
                    value={content}
                    setValue={setContent}
                    label={'Message'}
                    multiline
                />
                <Button
                    label={'Envoyer'}
                    border={'primary'}
                    color={'primary'}
                    hoverColor={'background'}
                    rounded
                />
            </div>
        </div>
    )
}

export default ContactScreen

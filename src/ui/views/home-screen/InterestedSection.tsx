import React, { type ReactElement } from 'react'
import Button from '@components/common/Button'
import { RoutesConstants } from '@constants/RoutesConstants'
import { useNavigate } from 'react-router-dom'
import Text from '@components/common/Text'

const InterestedSection = (): ReactElement => {
    const navigate = useNavigate()

    return (
        <div className={'pt-40 d-flex flex-column align-center pb-40'}>
            <Text
                className={'pb-40'}
            >
                Mon profil vous a convaincu? Vous souhaitez me poser plus de questions?
            </Text>
            <Button
                label={'Me contacter'}
                onClick={() => {
                    navigate(RoutesConstants.CONTACT_SCREEN_ROUTE)
                }}
                className={'mr-10'}
            />
        </div>
    )
}

export default InterestedSection

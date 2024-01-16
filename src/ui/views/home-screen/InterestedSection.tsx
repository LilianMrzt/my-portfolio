import React, { type ReactElement } from 'react'
import Button from '@components/common/Button'
import { RoutesConstants } from '@constants/RoutesConstants'
import { useNavigate } from 'react-router-dom'
import Text from '@components/common/Text'

const InterestedSection = (): ReactElement => {
    const navigate = useNavigate()

    return (
        <div className={'pt-40px d-flex flex-column align-center pb-40'}>
            <Text
                fontWeight={'700'}
                size={'60px'}
                color={'primary'}
            >
                COLLABORONS ENSEMBLE!
            </Text>
            <Button
                label={'Me contacter'}
                onClick={() => {
                    navigate(RoutesConstants.CONTACT_SCREEN_ROUTE)
                }}
            />
        </div>
    )
}

export default InterestedSection

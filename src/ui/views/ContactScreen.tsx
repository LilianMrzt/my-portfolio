import React, { type FC, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const ContactScreen: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            className={'screen bg-secondary'}
            id={id}
        >
            <Text>
                ContactScreen
            </Text>
        </div>
    )
}

export default ContactScreen

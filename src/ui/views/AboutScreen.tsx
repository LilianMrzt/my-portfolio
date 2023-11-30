import React, { type FC, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const AboutScreen: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            className={'screen bg-secondary'}
            id={id}
        >
            <Text>
                AboutScreen
            </Text>
        </div>
    )
}

export default AboutScreen

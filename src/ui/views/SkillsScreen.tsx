import React, { type FC, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const SkillsScreen: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            className={'screen'}
            id={id}
        >
            <Text>
                SkillsScreen
            </Text>
        </div>
    )
}

export default SkillsScreen

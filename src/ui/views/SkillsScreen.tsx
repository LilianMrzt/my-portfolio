import React, { type FC, forwardRef, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const SkillsScreen: FC<ScreenProps> = forwardRef<HTMLDivElement, ScreenProps>(
    ({ id }, ref): ReactElement => {
        return (
            <div
                className={'screen'}
                id={id}
                ref={ref}
            >
                <Text>
                SkillsScreen
                </Text>
            </div>
        )
    }
)

SkillsScreen.displayName = 'SkillsScreen'

export default SkillsScreen

import React, { type FC, forwardRef, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const AboutScreen: FC<ScreenProps> = forwardRef<HTMLDivElement, ScreenProps>(
    ({ id }, ref): ReactElement => {
        return (
            <div
                className={'screen'}
                id={id}
                ref={ref}
            >
                <Text>
                AboutScreen
                </Text>
            </div>
        )
    }
)

AboutScreen.displayName = 'AboutScreen'

export default AboutScreen

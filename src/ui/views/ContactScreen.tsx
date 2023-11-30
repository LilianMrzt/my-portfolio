import React, { type FC, forwardRef, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const ContactScreen: FC<ScreenProps> = forwardRef<HTMLDivElement, ScreenProps>(
    ({ id }, ref): ReactElement => {
        return (
            <div
                className={'screen bg-secondary'}
                id={id}
                ref={ref}
            >
                <Text>
                ContactScreen
                </Text>
            </div>
        )
    }
)

ContactScreen.displayName = 'ContactScreen'

export default ContactScreen

import React, { type ReactElement } from 'react'
import Button from '@components/common/Button'
import Text from '@components/common/Text'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'
import { StarIcon } from '@assets/Images'
import Icon from '@components/common/Icon'

const InterestedSection = (): ReactElement => {
    const { theme } = useTheme()
    const isDarkMode = theme === Theme.dark

    return (
        <div className={'pt-80px d-flex flex-column align-center pb-40'}>
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
                    window.open('mailto:lilian.marzet@gmail.com')
                }}
                color={'surface'}
                backgroundColor={isDarkMode ? 'secondary' : 'primary'}
                className={'mt-10'}
            />
            <Icon
                src={StarIcon}
                size={'40px'}
                className={'mt-30'}
                color={isDarkMode ? 'secondary' : 'primary'}
            />
        </div>
    )
}

export default InterestedSection

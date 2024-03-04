import React, { type ReactElement } from 'react'
import Button from '@components/common/Button'
import Text from '@components/common/Text'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'
import { StarIcon } from '@assets/Images'
import Icon from '@components/common/Icon'
import { useScreenSize } from '@utils/UseScreenSize'

const InterestedSection = (): ReactElement => {
    const { theme } = useTheme()
    const isDarkMode = theme === Theme.dark
    const { screenWidth } = useScreenSize()
    return (
        <div className={'p-100px pt-80px d-flex flex-column justify-center align-center pb-40'}>
            <Text
                fontWeight={'700'}
                size={screenWidth > 850 ? '60px' : '40px'}
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

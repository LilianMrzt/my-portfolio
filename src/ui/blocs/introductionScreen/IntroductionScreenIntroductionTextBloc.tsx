import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { StarIcon } from '@assets/Images'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'
import { useData } from '@utils/UseData'
import { useScreenSize } from '@utils/UseScreenSize'

const IntroductionScreenIntroductionTextBloc = (): ReactElement => {
    const { theme } = useTheme()
    const isDarkMode = theme === Theme.dark
    const { data } = useData()
    const { screenWidth } = useScreenSize()

    return (
        <div className={'w-100'}>
            <Text
                size={'24px'}
                font={'poppins'}
                className={screenWidth > 850 ? 'mb-40' : 'mb-10'}
            >
              Bonjour, je suis
            </Text>
            <div className={'d-flex align-center'}>
                <Text
                    fontWeight={'700'}
                    color={'text'}
                    size={screenWidth > 850 ? '120px' : '60px'}
                    letterSpacing={'2px'}
                    lineHeight={1}
                >
                  Lilian Marzet
                </Text>
                <Icon
                    src={StarIcon}
                    size={'40px'}
                    className={'ml-20'}
                    color={isDarkMode ? 'secondary' : 'primary'}
                />
            </div>
            <Text
                size={'24px'}
                color={'primary'}
                fontWeight={'500'}
                font={'poppins'}
            >
              Développeur Fullstack
            </Text>
            <Text
                size={'24px'}
                font={'poppins'}
                className={`${screenWidth > 850 && 'w-65'} mt-30`}
            >
                {data?.introduction}
            </Text>
        </div>
    )
}

export default IntroductionScreenIntroductionTextBloc

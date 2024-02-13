import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'
import Picture from '@components/cards/Picture'
import Button from '@components/common/Button'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'
import { useData } from '@utils/UseData'

const AboutMeSection = (): ReactElement => {
    const { theme } = useTheme()
    const isDarkTheme = theme === Theme.dark
    const { data } = useData()

    return (
        <div className={'bg-tertiary w-100 d-flex flex-column border-radius-top-left-50px border-radius-top-right-50px align-center'}>
            <div className={'d-flex mw-1512 pb-80px pt-80px pr-80px align-center'}>
                <div className={'d-flex flex-1 flex-column p-100px gap-30 align-start justify-center'}>
                    <Text
                        color={isDarkTheme ? 'primary' : 'background'}
                        size={'40px'}
                        fontWeight={'700'}
                    >
                        A PROPOS
                    </Text>
                    <div>
                        <Text
                            color={'surface'}
                            font={'poppins'}
                        >
                            {data?.aboutMe ?? ''}
                        </Text>
                    </div>
                    <Button
                        label={'En savoir plus'}
                        color={isDarkTheme ? 'secondary' : 'primary'}
                        backgroundColor={'surface'}
                        onClick={() => {}}
                        animationFromCenter
                    />
                </div>
                <Picture/>
            </div>
        </div>
    )
}

export default AboutMeSection

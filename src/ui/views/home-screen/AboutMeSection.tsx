import React, { type ReactElement, useEffect, useState } from 'react'
import Text from '@components/common/Text'
import AboutMeFixtures from '@constants/fixtures/AboutMeFixtures.json'
import Picture from '@components/cards/Picture'
import Button from '@components/common/Button'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'

const AboutMeSection = (): ReactElement => {
    const [aboutMe, setAboutMe] = useState('')

    const { theme } = useTheme()
    const isDarkTheme = theme === Theme.dark

    useEffect(() => {
        setAboutMe(AboutMeFixtures.content)
    }, [])

    return (
        <div className={'bg-tertiary w-100 d-flex flex-column border-radius-top-left-50px border-radius-top-right-50px align-center'}>
            <div className={'d-flex mw-1512 p-80px align-center'}>
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
                            {aboutMe}
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

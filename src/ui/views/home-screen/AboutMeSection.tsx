import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'
import Picture from '@components/cards/Picture'
import Button from '@components/common/Button'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'
import { useData } from '@utils/UseData'
import { downloadFile } from '@services/DownloadFile'
import { useScreenSize } from '@utils/UseScreenSize'

const AboutMeSection = (): ReactElement => {
    const { theme } = useTheme()
    const isDarkTheme = theme === Theme.dark
    const { data } = useData()
    const { screenWidth } = useScreenSize()

    return (
        <div className={'bg-tertiary w-100 d-flex flex-column border-radius-top-left-50px border-radius-top-right-50px align-center'}>
            <div className={'d-flex mw-1512 p-100px gap-100px align-center wrap justify-center'}>
                <div className={`d-flex flex-1 flex-column gap-30 align-start justify-center ${screenWidth < 850 && 'min-width-350px'} ${screenWidth >= 850 && 'p-100px min-width-300px'}`}>
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
                        label={'Télécharger mon CV'}
                        color={isDarkTheme ? 'secondary' : 'primary'}
                        backgroundColor={'surface'}
                        onClick={downloadFile}
                        animationFromCenter
                        className={screenWidth < 1200 ? 'align-self-center' : ''}
                    />
                </div>
                <Picture/>
            </div>
        </div>
    )
}

export default AboutMeSection

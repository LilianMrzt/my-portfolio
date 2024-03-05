import React, { type FC, type ReactElement, useState } from 'react'
import { type NavigationBarProps } from '@interfaces/components/navigation/NavigationBarProps'
import { MoonLogo, SunLogo } from '@assets/Images'
import { Theme } from '@constants/Constants'
import Button from '@components/common/Button'
import { useNavigate } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'
import { useScreenSize } from '@utils/UseScreenSize'

const NavigationBar: FC<NavigationBarProps> = ({
    theme,
    toggleTheme
}): ReactElement => {
    const [isIconSun, setIsIconSun] = useState(theme === Theme.dark)
    const { screenWidth } = useScreenSize()
    const handleThemeChange = (): void => {
        setIsIconSun(!isIconSun)
        toggleTheme()
    }

    const navigate = useNavigate()

    return (
        <div
            className={`d-flex space-between h-80px align-center ${screenWidth > 850 && 'pl-20'} pr-20 index-2`}
        >
            <Button
                label={screenWidth > 850 ? 'Portfolio.' : 'P.'}
                onClick={() => {
                    navigate(RoutesConstants.HOME_SCREEN_ROUTE)
                }}
                border={'none'}
                color={'text'}
                backgroundColor={'background'}
                effect={'none'}
            />
            <div
                className='d-flex flex-row align-center'
            >
                <Button
                    label={'Me contacter'}
                    onClick={() => {
                        window.open('mailto:lilian.marzet@gmail.com')
                    }}
                    className={'mr-10'}
                />
                <Button
                    backgroundColor={'background'}
                    color={'primary'}
                    icon={isIconSun ? SunLogo : MoonLogo}
                    onClick={handleThemeChange}
                />
            </div>
        </div>
    )
}

export default NavigationBar

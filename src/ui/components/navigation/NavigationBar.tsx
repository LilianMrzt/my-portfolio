import React, { type FC, type ReactElement, useState } from 'react'
import { type NavigationBarProps } from '@interfaces/components/navigation/NavigationBarProps'
import IconButton from '@components/common/IconButton'
import { MoonLogo, SunLogo } from '@assets/Images'
import { Theme } from '@constants/Constants'
import NavigationBarTab from '@components/navigation/NavigationBarTab'
import Button from '@components/common/Button'
import { screenIds } from '@constants/ScreensConstants'

const NavigationBar: FC<NavigationBarProps> = ({
    theme,
    toggleTheme,
    handleClick
}): ReactElement => {
    const [isIconSun, setIsIconSun] = useState(theme === Theme.dark)

    const handleThemeChange = (): void => {
        setIsIconSun(!isIconSun)
        toggleTheme()
    }

    return (
        <div
            className={'d-flex space-between h-64px align-center pl-20 pr-20 index-2'}
        >
            <Button
                label={'Portfolio.'}
                size={'large'}
                onClick={() => {
                    handleClick(screenIds.homeScreenId)
                }}
                hoverEffect={false}
            />
            <div
                className='d-flex flex-row align-center'
            >
                <NavigationBarTab
                    label={'Accueil'}
                    className={'mr-10'}
                    onClick={() => {
                        handleClick(screenIds.homeScreenId)
                    }}
                />
                <NavigationBarTab
                    label={'A propos'}
                    className={'mr-10'}
                    onClick={() => {
                        handleClick(screenIds.aboutScreenId)
                    }}
                />
                <NavigationBarTab
                    label={'Compétences'}
                    className={'mr-10'}
                    onClick={() => {
                        handleClick(screenIds.skillsScreenId)
                    }}
                />
                <Button
                    label={'Me contacter'}
                    size={'medium'}
                    onClick={() => {
                        handleClick(screenIds.homeScreenId)
                    }}
                    border={'primary'}
                    rounded
                    className={'mr-10'}
                    fontWeight={'bold'}
                    hoverEffect
                />
                <IconButton
                    backgroundColor={'background'}
                    color={'primary'}
                    icon={isIconSun ? SunLogo : MoonLogo}
                    onClick={handleThemeChange}
                    hoverEffect={false}
                />
            </div>
        </div>
    )
}

export default NavigationBar

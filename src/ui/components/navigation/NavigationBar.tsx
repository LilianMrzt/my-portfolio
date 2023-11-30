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
    handleClick,
    activeSectionId,
    setActiveSectionId
}): ReactElement => {
    const [isIconSun, setIsIconSun] = useState(theme === Theme.dark)

    const handleThemeChange = (): void => {
        setIsIconSun(!isIconSun)
        toggleTheme()
    }

    return (
        <div
            className={'d-flex space-between h-64px align-center bg-secondary shadow pl-20 pr-20 index-2 fixed left-0 right-0 top-0'}
        >

            <Button
                label={'Portfolio.'}
                size={'large'}
                backgroundColor={'secondary'}
                color={'text'}
                onClick={() => {
                    handleClick(screenIds.homeScreenId)
                    setActiveSectionId(screenIds.homeScreenId)
                }}
            />
            <div
                className='d-flex flex-row align-center'
            >
                <NavigationBarTab
                    label={'Accueil'}
                    className={'mr-10'}
                    onClick={() => {
                        handleClick(screenIds.homeScreenId)
                        setActiveSectionId(screenIds.homeScreenId)
                    }}
                    isActive={activeSectionId === screenIds.homeScreenId}
                />
                <NavigationBarTab
                    label={'A propos'}
                    className={'mr-10'}
                    onClick={() => {
                        handleClick(screenIds.aboutScreenId)
                        setActiveSectionId(screenIds.aboutScreenId)
                    }}
                    isActive={activeSectionId === screenIds.aboutScreenId}
                />
                <NavigationBarTab
                    label={'Compétences'}
                    className={'mr-10'}
                    onClick={() => {
                        handleClick(screenIds.skillsScreenId)
                        setActiveSectionId(screenIds.skillsScreenId)
                    }}
                    isActive={activeSectionId === screenIds.skillsScreenId}
                />
                <NavigationBarTab
                    label={'Contact'}
                    className={'mr-10'}
                    onClick={() => {
                        handleClick(screenIds.contactScreenId)
                        setActiveSectionId(screenIds.contactScreenId)
                    }}
                    isActive={activeSectionId === screenIds.contactScreenId}
                />
                <IconButton
                    backgroundColor={'secondary'}
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

import React, { type FC, type ReactElement, useState } from 'react'
import { type NavigationBarProps } from '@interfaces/components/navigation/NavigationBarProps'
import IconButton from '@components/common/IconButton'
import { MoonLogo, SunLogo } from '@assets/Images'
import { Theme } from '@constants/Constants'
import NavigationBarTab from '@components/navigation/NavigationBarTab'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'
import Button from '@components/common/Button'

const NavigationBar: FC<NavigationBarProps> = ({
    theme,
    toggleTheme
}): ReactElement => {
    const [isIconSun, setIsIconSun] = useState(theme === Theme.dark)

    const navigate = useNavigate()

    const location = useLocation()

    const handleThemeChange = (): void => {
        setIsIconSun(!isIconSun)
        toggleTheme()
    }

    return (
        <div
            className={'d-flex space-between h-64px align-center bg-secondary shadow pl-20 pr-20 index-2 relative'}
        >

            <Button
                label={'Portfolio.'}
                size={'large'}
                backgroundColor={'secondary'}
                color={'text'}
                onClick={() => { navigate(RoutesConstants.home) }}
            />
            <div
                className='d-flex flex-row align-center'
            >
                <NavigationBarTab
                    label={'Accueil'}
                    className={'mr-10'}
                    onClick={() => {
                        navigate(RoutesConstants.home)
                    }}
                    isActive={location.pathname === RoutesConstants.home}
                />
                <NavigationBarTab
                    label={'A propos'}
                    className={'mr-10'}
                    onClick={() => {
                        navigate(RoutesConstants.about)
                    }}
                    isActive={location.pathname === RoutesConstants.about}
                />
                <NavigationBarTab
                    label={'Compétences'}
                    className={'mr-10'}
                    onClick={() => {
                        navigate(RoutesConstants.skills)
                    }}
                    isActive={location.pathname === RoutesConstants.skills}
                />
                <NavigationBarTab
                    label={'Contact'}
                    className={'mr-10'}
                    onClick={() => {
                        navigate(RoutesConstants.contact)
                    }}
                    isActive={location.pathname === RoutesConstants.contact}
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

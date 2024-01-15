import React, { type FC, type ReactElement, useState } from 'react'
import { type NavigationBarProps } from '@interfaces/components/navigation/NavigationBarProps'
import { MoonLogo, SunLogo } from '@assets/Images'
import { Theme } from '@constants/Constants'
import Button from '@components/common/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'

const NavigationBar: FC<NavigationBarProps> = ({
    theme,
    toggleTheme
}): ReactElement => {
    const [isIconSun, setIsIconSun] = useState(theme === Theme.dark)

    const handleThemeChange = (): void => {
        setIsIconSun(!isIconSun)
        toggleTheme()
    }

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div
            className={'d-flex space-between h-80px align-center pl-20 pr-20 index-2'}
        >
            <Button
                label={'Portfolio.'}
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
                {location.pathname === RoutesConstants.HOME_SCREEN_ROUTE && (
                    <>
                        <Button
                            label={'Me contacter'}
                            onClick={() => {
                                navigate(RoutesConstants.CONTACT_SCREEN_ROUTE)
                            }}
                            className={'mr-10'}
                        />
                    </>
                )}
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

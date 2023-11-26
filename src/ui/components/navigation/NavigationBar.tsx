import React, { type FC, type ReactElement, useState } from 'react'
import { type NavigationBarProps } from '@interfaces/components/navigation/NavigationBarProps'
import IconButton from '@components/common/IconButton'
import { LetterLogo, MoonLogo, SunLogo } from '@assets/Images'
import { Theme } from '@constants/Constants'
import NavigationBarTab from '@components/navigation/NavigationBarTab'

const NavigationBar: FC<NavigationBarProps> = ({
  theme,
  toggleTheme
}): ReactElement => {
  const [isIconSun, setIsIconSun] = useState(theme === Theme.dark)

  const handleThemeChange = (): void => {
    setIsIconSun(!isIconSun)
    toggleTheme()
  }

  return (
      <div
          className='d-flex space-between h-64px align-center bg-background shadow pl-20 pr-20'
      >
          <IconButton
              backgroundColor={'background'}
              color={'text'}
              icon={LetterLogo}
              size={'large'}
              padding={0}
          />
          <div
              className='d-flex flex-row align-center'
          >
              <NavigationBarTab
                  label={'Accueil'}
                  className={'mr-10'}
              />
              <NavigationBarTab
                  label={'A propos'}
                  className={'ml-10 mr-10'}
              />
              <NavigationBarTab
                  label={'Compétences'}
                  className={'ml-10 mr-10'}
              />
              <NavigationBarTab
                  label={'Contact'}
                  className={'ml-10 mr-10'}
              />
              <IconButton
                  backgroundColor={'background'}
                  color={'primary'}
                  icon={isIconSun ? SunLogo : MoonLogo}
                  onClick={handleThemeChange}
                  className={'ml-10'}
              />
          </div>
      </div>
  )
}

export default NavigationBar

import React, { type FC, type ReactElement, useState } from 'react'
import { type NavigationBarProps } from '@interfaces/components/navigation/NavigationBarProps'
import IconButton from '@components/common/IconButton'
import { LetterLogo, MoonLogo, SunLogo } from '@assets/Images'
import { Theme } from '@constants/Constants'
import NavigationBarTab from '@components/navigation/NavigationBarTab'
import { useNavigate } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'

const NavigationBar: FC<NavigationBarProps> = ({
  theme,
  toggleTheme
}): ReactElement => {
  const [isIconSun, setIsIconSun] = useState(theme === Theme.dark)

  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(RoutesConstants.home)

  const handleThemeChange = (): void => {
    setIsIconSun(!isIconSun)
    toggleTheme()
  }

  return (
      <div
          className='d-flex space-between h-64px align-center bg-secondary shadow pl-20 pr-20 index-2 relative'
      >
          <IconButton
              backgroundColor={'secondary'}
              color={'text'}
              icon={LetterLogo}
              size={'large'}
              padding={0}
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
                    setActiveTab(RoutesConstants.home)
                  }}
                  isActive={activeTab === RoutesConstants.home}
              />
              <NavigationBarTab
                  label={'A propos'}
                  className={'ml-10 mr-10'}
                  onClick={() => {
                    navigate(RoutesConstants.about)
                    setActiveTab(RoutesConstants.about)
                  }}
                  isActive={activeTab === RoutesConstants.about}
              />
              <NavigationBarTab
                  label={'Compétences'}
                  className={'ml-10 mr-10'}
                  onClick={() => {
                    navigate(RoutesConstants.skills)
                    setActiveTab(RoutesConstants.skills)
                  }}
                  isActive={activeTab === RoutesConstants.skills}
              />
              <NavigationBarTab
                  label={'Contact'}
                  className={'ml-10 mr-10'}
                  onClick={() => {
                    navigate(RoutesConstants.contact)
                    setActiveTab(RoutesConstants.contact)
                  }}
                  isActive={activeTab === RoutesConstants.contact}
              />
              <IconButton
                  backgroundColor={'secondary'}
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

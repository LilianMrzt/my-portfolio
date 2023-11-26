import React, { type FC, type ReactElement, useState } from 'react'
import Button from '@components/common/Button'
import { type NavigationBarProps } from '@interfaces/components/NavigationBarProps'
import IconButton from '@components/common/IconButton'
import { MoonLogo, SunLogo } from '@assets/Images'
import { Theme } from '@constants/Constants'

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
          className='d-flex space-between h-64px align-center bg-background shadow pl-10 pr-10'
      >
          <p>
              Test
          </p>
          <div
              className='d-flex flex-row align-center'
          >
              <Button
                  label={'Test'}
              />
              <Button
                  label={'Test'}
                  className={'ml-10'}
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

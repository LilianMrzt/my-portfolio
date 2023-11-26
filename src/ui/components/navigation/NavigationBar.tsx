import React, { type FC, type ReactElement } from 'react'
import Button from '@components/common/Button'
import Switch from '@components/common/Switch'
import { type NavigationBarProps } from '@interfaces/components/NavigationBarProps'
import IconButton from '@components/common/IconButton'
import { MoonLogo, SunLogo } from '@assets/Images'

const NavigationBar: FC<NavigationBarProps> = ({ theme, onChange }): ReactElement => {
  return (
      <div className='d-flex space-between h-64px align-center bg-background shadow pl-10 pr-10'>
          <p>
              Test
          </p>
          <div className='d-flex flex-row align-center'>
              <Button
                  label={'Test'}
              />
              <Button
                  label={'Test'}
                  className={'ml-10'}
              />
              <Switch checked={theme === 'dark'} changeValue={onChange}/>
              <IconButton icon={SunLogo}/>
              <IconButton icon={MoonLogo}/>
          </div>
      </div>
  )
}

export default NavigationBar

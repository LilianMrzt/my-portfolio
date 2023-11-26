import React, { type FC } from 'react'
import Button from '@components/common/Button'

const NavigationBar: FC = () => {
  return (
      <div className='d-flex space-between h-64px align-center bg-background shadow pl-10 pr-10'>
          <p>
              Test
          </p>
          <div className='d-flex flex-row'>
              <Button
                  label={'Test'}
              />
              <Button
                  label={'Test'}
                  className={'ml-10'}
              />
          </div>
      </div>
  )
}

export default NavigationBar

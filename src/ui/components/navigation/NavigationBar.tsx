import React, { type FC } from 'react'

const NavigationBar: FC = () => {
  return (
      <div className='d-flex space-between h-64px align-center bg-background shadow pl-10 pr-10'>
          <p>
              Test
          </p>
          <div className='d-flex'>
              <p>
                  Test
              </p>
              <p>
                  Test
              </p>
          </div>
      </div>
  )
}

export default NavigationBar

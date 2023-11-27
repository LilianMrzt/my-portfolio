import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'

const HomeScreen = (): ReactElement => {
  return (
      <div className={'relative d-flex h-100 align-center justify-center'}>
          <div className={'index-1 relative transform-64px-top'}>
              <Text>
                  HomeScreen
              </Text>
          </div>
          <div className={'absolute top-0'}>
              <div className={'w-100 h-64px bg-secondary'}/>
              <div className={'triangle'}/>
          </div>
      </div>
  )
}

export default HomeScreen

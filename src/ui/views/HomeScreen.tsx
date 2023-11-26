import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'

const HomeScreen = (): ReactElement => {
  return (
      <div className={'relative'}>
          <div className={'index-1 relative'}>
              <Text>
                  HomeScreen
              </Text>
          </div>
          <div className={'triangle'}/>
      </div>
  )
}

export default HomeScreen

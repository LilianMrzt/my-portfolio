import React, { type FC } from 'react'
import MainNavigation from '@navigation/MainNavigation'
import NavigationBar from '@components/navigation/NavigationBar'

const App: FC = () => {
  return (
        <div>
            <NavigationBar/>
            <MainNavigation/>
        </div>
  )
}

export default App

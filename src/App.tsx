import React, { type FC } from 'react'
import MainNavigation from '@navigation/MainNavigation'
import NavigationBar from '@components/navigation/NavigationBar'
import { useTheme } from '@utils/UseThemeHook'

const App: FC = () => {
  const [theme, handleChange] = useTheme()

  return (
        <body data-theme={theme}>
            <NavigationBar theme={theme} onChange={handleChange}/>
            <MainNavigation/>
        </body>
  )
}

export default App

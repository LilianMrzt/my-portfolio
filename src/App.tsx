import React, { type ReactElement } from 'react'
import MainNavigation from '@navigation/MainNavigation'
import NavigationBar from '@components/navigation/NavigationBar'
import { useTheme } from '@utils/UseThemeHook'

const App = (): ReactElement => {
  const [theme, toggleTheme] = useTheme()

  return (
        <body data-theme={theme}>
            <NavigationBar
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <MainNavigation/>
        </body>
  )
}

export default App

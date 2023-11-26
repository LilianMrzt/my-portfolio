import React, { type ReactElement } from 'react'
import MainNavigation from '@navigation/MainNavigation'
import NavigationBar from '@components/navigation/NavigationBar'
import { useTheme } from '@utils/UseThemeHook'
import './App.css'

const App = (): ReactElement => {
  const [theme, toggleTheme] = useTheme()

  return (
        <body data-theme={theme}>
            <NavigationBar
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <main className={'main'}>
                <MainNavigation/>
            </main>
        </body>
  )
}

export default App

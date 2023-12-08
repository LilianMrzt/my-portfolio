import React, { type ReactElement } from 'react'
import { useTheme } from '@utils/UseThemeHook'
import NavigationBar from '@components/navigation/NavigationBar'
import MainNavigation from '@navigation/MainNavigation'

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

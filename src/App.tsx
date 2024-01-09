import React, { type ReactElement } from 'react'
import NavigationBar from '@components/navigation/NavigationBar'
import MainNavigation from '@navigation/MainNavigation'
import { useTheme } from '@utils/UseTheme'

const App = (): ReactElement => {
    const { theme, toggleTheme } = useTheme()

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

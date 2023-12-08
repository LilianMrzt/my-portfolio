import React, { type ReactElement } from 'react'
import { useTheme } from '@utils/UseThemeHook'
import './App.css'
import NavigationBar from '@components/navigation/NavigationBar'
import MainNavigation from '@navigation/MainNavigation'

const App = (): ReactElement => {
    const [theme, toggleTheme] = useTheme()

    const handleClickScroll = (id: string): void => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <body data-theme={theme}>
            <NavigationBar
                theme={theme}
                toggleTheme={toggleTheme}
                handleClick={handleClickScroll}
            />
            <MainNavigation/>
        </body>
    )
}

export default App

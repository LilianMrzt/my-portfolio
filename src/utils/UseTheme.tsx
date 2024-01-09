import React, { createContext, type FC, useContext, useEffect, useState } from 'react'
import { Theme } from '@constants/Constants'

const ThemeContext = createContext({})

export const ThemeProvider: FC<any> = ({ children }) => {
    const [theme, setTheme] = useState(Theme.light)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.dark ? Theme.light : Theme.dark
        setTheme(newTheme)
        localStorage.setItem('data-theme', newTheme)
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('data-theme')
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = (): any => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

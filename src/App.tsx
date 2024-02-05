import React, { type ReactElement, useEffect } from 'react'
import NavigationBar from '@components/navigation/NavigationBar'
import MainNavigation from '@navigation/MainNavigation'
import { useTheme } from '@utils/UseTheme'
import { useData } from '@utils/UseData'
import { fetchData } from '@services/FetchData'

const App = (): ReactElement => {
    const { theme, toggleTheme } = useTheme()
    const { setData } = useData()

    useEffect(() => {
        void fetchData()
            .then((data) => {
                setData(data)
            })
    }, [])

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

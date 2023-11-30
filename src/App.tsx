import React, { type ReactElement, useState } from 'react'
import NavigationBar from '@components/navigation/NavigationBar'
import { useTheme } from '@utils/UseThemeHook'
import './App.css'
import HomeScreen from '@views/HomeScreen'
import AboutScreen from '@views/AboutScreen'
import SkillsScreen from '@views/SkillsScreen'
import ContactScreen from '@views/ContactScreen'
import { screenIds } from '@constants/ScreensConstants'

const App = (): ReactElement => {
    const [theme, toggleTheme] = useTheme()
    const [activeSectionId, setActiveSectionId] = useState(screenIds.homeScreenId)

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
                activeSectionId={activeSectionId}
                setActiveSectionId={setActiveSectionId}
            />
            <main className={'full-screen-height overflow-auto'} style={{ marginTop: '7vh', height: '93vh' }}>
                <HomeScreen
                    id={screenIds.homeScreenId}
                />
                <AboutScreen
                    id={screenIds.aboutScreenId}
                />
                <SkillsScreen
                    id={screenIds.skillsScreenId}
                />
                <ContactScreen
                    id={screenIds.contactScreenId}
                />
            </main>
        </body>
    )
}

export default App

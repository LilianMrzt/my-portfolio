import React, { type ReactElement, useRef } from 'react'
import { useTheme } from '@utils/UseThemeHook'
import './App.css'
import HomeScreen from '@views/HomeScreen'
import AboutScreen from '@views/AboutScreen'
import SkillsScreen from '@views/SkillsScreen'
import ContactScreen from '@views/ContactScreen'
import { screenIds } from '@constants/ScreensConstants'

const App = (): ReactElement => {
    const [theme, toggleTheme] = useTheme()

    const handleClickScroll = (id: string): void => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const sectionRefs = {
        [screenIds.homeScreenId]: useRef(null),
        [screenIds.aboutScreenId]: useRef(null),
        [screenIds.skillsScreenId]: useRef(null),
        [screenIds.contactScreenId]: useRef(null)
    }

    return (
        <body data-theme={theme}>
            <main className={''}>
                <HomeScreen
                    id={screenIds.homeScreenId}
                    ref={sectionRefs[screenIds.homeScreenId]}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    handleClickScroll={handleClickScroll}
                />
                <AboutScreen
                    id={screenIds.aboutScreenId}
                    ref={sectionRefs[screenIds.aboutScreenId]}

                />
                <SkillsScreen
                    id={screenIds.skillsScreenId}
                    ref={sectionRefs[screenIds.skillsScreenId]}
                />
                <ContactScreen
                    id={screenIds.contactScreenId}
                    ref={sectionRefs[screenIds.contactScreenId]}
                />

            </main>
        </body>
    )
}

export default App

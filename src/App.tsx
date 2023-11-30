import React, { type ReactElement, useEffect, useRef, useState } from 'react'
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

    const sectionRefs = {
        [screenIds.homeScreenId]: useRef(null),
        [screenIds.aboutScreenId]: useRef(null),
        [screenIds.skillsScreenId]: useRef(null),
        [screenIds.contactScreenId]: useRef(null)
    }

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log((entry.target.id))
                    setActiveSectionId(entry.target.id)
                }
            })
        }, observerOptions)

        Object.values(screenIds).forEach((id) => {
            if (sectionRefs[id].current) {
                observer.observe(sectionRefs[id].current as any)
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [sectionRefs])

    return (
        <body data-theme={theme}>
            <NavigationBar
                theme={theme}
                toggleTheme={toggleTheme}
                handleClick={handleClickScroll}
                activeSectionId={activeSectionId}
                setActiveSectionId={setActiveSectionId}
            />
            <main className={'full-screen-height overflow-auto mt-64px navbar-full-screen-height'}>
                <HomeScreen
                    id={screenIds.homeScreenId}
                    ref={sectionRefs[screenIds.homeScreenId]}
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

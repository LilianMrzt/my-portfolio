import React, { createContext, type FC, useContext, useEffect, useState } from 'react'

const ScreenSizeContext = createContext({})

export const ScreenSizeProvider: FC<any> = ({ children }) => {
    function getWindowSize (): any {
        const { innerWidth, innerHeight } = window
        return { innerWidth, innerHeight }
    }

    const [windowSize, setWindowSize] = useState(getWindowSize())

    const screenHeight = windowSize.innerHeight

    const screenWidth = windowSize.innerWidth

    useEffect(() => {
        function handleWindowResize (): void {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <ScreenSizeContext.Provider value={{ screenHeight, screenWidth }}>
            {children}
        </ScreenSizeContext.Provider>
    )
}
export const useScreenSize = (): any => {
    const context = useContext(ScreenSizeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ScreenSizeProvider')
    }
    return context
}

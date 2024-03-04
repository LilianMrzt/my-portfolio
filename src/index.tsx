import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@utils/UseTheme'
import DataProvider from '@utils/UseData'
import { ScreenSizeProvider } from '@utils/UseScreenSize'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <DataProvider>
                <ScreenSizeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ScreenSizeProvider>
            </DataProvider>
        </ThemeProvider>
    </React.StrictMode>
)

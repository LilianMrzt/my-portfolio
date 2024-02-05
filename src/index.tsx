import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@utils/UseTheme'
import DataProvider from '@utils/UseData'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <DataProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </DataProvider>
        </ThemeProvider>
    </React.StrictMode>
)

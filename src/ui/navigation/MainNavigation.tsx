import React, { type ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'
import ContactScreen from '@views/contact-screen/ContactScreen'
import HomeScreen from '@views/home-screen/HomeScreen'

const MainNavigation = (): ReactElement => {
    return (
        <Routes>
            <Route
                path="*"
                element={<Navigate to={RoutesConstants.HOME_SCREEN_ROUTE} />}
            />
            <Route
                path={RoutesConstants.HOME_SCREEN_ROUTE}
                element={<HomeScreen/>}
            />
            <Route
                path={RoutesConstants.CONTACT_SCREEN_ROUTE}
                element={<ContactScreen/>}
            />
        </Routes>
    )
}

export default MainNavigation

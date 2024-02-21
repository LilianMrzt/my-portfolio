import React, { type ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'
import HomeScreen from '@views/home-screen/HomeScreen'
import ProjectScreen from '@views/ProjectScreen'

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
                path={RoutesConstants.PROJECT_SCREEN_ROUTE}
                element={<ProjectScreen/>}
            />
        </Routes>
    )
}

export default MainNavigation

import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '@views/HomeScreen'
import { RoutesConstants } from '@constants/RoutesConstants'
import AboutScreen from '@views/AboutScreen'
import SkillsScreen from '@views/SkillsScreen'
import ContactScreen from '@views/ContactScreen'

const MainNavigation: FC = () => {
    return (
        <Routes>
            <Route path={RoutesConstants.home} element={<HomeScreen />}/>
            <Route path={RoutesConstants.about} element={<AboutScreen />}/>
            <Route path={RoutesConstants.skills} element={<SkillsScreen />}/>
            <Route path={RoutesConstants.contact} element={<ContactScreen />}/>
        </Routes>
    )
}

export default MainNavigation

import React, { type ReactElement } from 'react'
import IntroductionScreen from '@views/IntroductionScreen'
import { screenIds } from '@constants/ScreensConstants'
import AboutScreen from '@views/AboutScreen'
import SkillsScreen from '@views/SkillsScreen'

const HomeScreen = (): ReactElement => {
    return (
        <div>
            <IntroductionScreen
                id={screenIds.homeScreenId}
            />
            <AboutScreen
                id={screenIds.aboutScreenId}
            />
            <SkillsScreen
                id={screenIds.skillsScreenId}
            />
        </div>
    )
}

export default HomeScreen

import React, { type ReactElement } from 'react'
import IntroductionSection from '@views/home-screen/IntroductionSection'
import { screenIds } from '@constants/ScreensConstants'
import AboutSection from '@views/home-screen/AboutSection'
import SkillsSection from '@views/home-screen/SkillsSection'
import Footer from '@components/navigation/Footer'
import MyWorkSection from '@views/home-screen/MyWorkSection'
import TestimonialsSections from '@views/home-screen/TestimonialsSections'
import InterestedSection from '@views/home-screen/InterestedSection'

const HomeScreen = (): ReactElement => {
    return (
        <div>
            <IntroductionSection
                id={screenIds.homeScreenId}
            />
            <AboutSection
                id={screenIds.aboutScreenId}
            />
            <SkillsSection
                id={screenIds.skillsScreenId}
            />
            <MyWorkSection/>
            <TestimonialsSections/>
            <InterestedSection/>
            <Footer/>
        </div>
    )
}

export default HomeScreen

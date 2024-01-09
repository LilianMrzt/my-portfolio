import React, { type ReactElement } from 'react'
import IntroductionSection from '@views/home-screen/IntroductionSection'
import { sectionIds } from '@constants/ScreensConstants'
import AboutSection from '@views/home-screen/AboutSection'
import SkillsSection from '@views/home-screen/SkillsSection'
import Footer from '@components/navigation/Footer'
import MyWorkSection from '@views/home-screen/MyWorkSection'
import TestimonialsSections from '@views/home-screen/TestimonialsSections'
import InterestedSection from '@views/home-screen/InterestedSection'

const HomeScreen = (): ReactElement => {
    return (
        <div className={'d-flex flex-column full-screen-width align-center'}>
            <div className={'mw-1920 d-flex flex-column align-center bg-background'}>
                <IntroductionSection/>
                <MyWorkSection id={sectionIds.ProjectSectionId}/>
                <AboutSection />
                <SkillsSection/>
                <TestimonialsSections/>
                <InterestedSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeScreen

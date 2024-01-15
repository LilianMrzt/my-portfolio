import React, { type ReactElement } from 'react'
import IntroductionSection from '@views/home-screen/IntroductionSection'
import { sectionIds } from '@constants/ScreensConstants'
import SkillsSection from '@views/home-screen/SkillsSection'
import Footer from '@components/navigation/Footer'
import MyWorkSection from '@views/home-screen/MyWorkSection'
import TestimonialsSections from '@views/home-screen/TestimonialsSections'
import InterestedSection from '@views/home-screen/InterestedSection'
import AboutMeSection from '@views/home-screen/AboutMeSection'

const HomeScreen = (): ReactElement => {
    return (
        <div className={'d-flex flex-column full-screen-width align-center'}>
            <div className={'d-flex flex-column align-center bg-background'}>
                <IntroductionSection/>
                <MyWorkSection id={sectionIds.ProjectSectionId}/>
                <AboutMeSection />
                <SkillsSection/>
                <TestimonialsSections/>
                <InterestedSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeScreen

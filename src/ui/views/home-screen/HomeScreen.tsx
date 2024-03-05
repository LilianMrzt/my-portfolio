import React, { type ReactElement } from 'react'
import IntroductionSection from '@views/home-screen/IntroductionSection'
import Footer from '@components/navigation/Footer'
import { sectionIds } from '@constants/ScreensConstants'
import ProjectsSection from '@views/home-screen/ProjectsSection'
import TestimonialsSections from '@views/home-screen/TestimonialsSections'
import InterestedSection from '@views/home-screen/InterestedSection'
import SkillsSection from '@views/home-screen/SkillsSection'
import AboutMeSection from '@views/home-screen/AboutMeSection'

const HomeScreen = (): ReactElement => {
    return (
        <div className={'d-flex flex-column align-center'}>
            <div className={'d-flex flex-column align-center bg-background'}>
                <IntroductionSection/>
                <ProjectsSection id={sectionIds.ProjectSectionId}/>
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

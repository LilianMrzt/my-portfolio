import React, { type ReactElement } from 'react'
import IntroductionSection from '@views/home-screen/IntroductionSection'
import Footer from '@components/navigation/Footer'
import { sectionIds } from '@constants/ScreensConstants'
import ProjectsSection from '@views/home-screen/ProjectsSection'
import TestimonialsSections from '@views/home-screen/TestimonialsSections'

const HomeScreen = (): ReactElement => {
    return (
        <div className={'d-flex flex-column align-center'}>
            <div className={'d-flex flex-column align-center bg-background'}>
                <IntroductionSection/>
                <ProjectsSection id={sectionIds.ProjectSectionId}/>
                {/*                <AboutMeSection />
                <SkillsSection/>

                <InterestedSection/> */}
                <TestimonialsSections/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomeScreen

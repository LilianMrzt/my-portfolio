import React, { type ReactElement } from 'react'
import IntroductionSection from '@views/home-screen/IntroductionSection'
import Footer from '@components/navigation/Footer'

const HomeScreen = (): ReactElement => {
    return (
        <div className={'d-flex flex-column align-center'}>
            <div className={'d-flex flex-column align-center bg-background'}>
                <IntroductionSection/>
                {/* <ProjectsSection id={sectionIds.ProjectSectionId}/>
                <AboutMeSection />
                <SkillsSection/>
                <TestimonialsSections/>
                <InterestedSection/> */}
            </div>
            <Footer/>
        </div>
    )
}

export default HomeScreen

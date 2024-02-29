import { type TestimonialInterface } from '@interfaces/api/TestimonialInterface'
import { type SkillsInterface } from '@interfaces/api/SkillsInterface'
import { type ProjectInterface } from '@interfaces/api/ProjectInterface'

export interface HomePageInterface {
    id: string
    introduction: string
    aboutMe: string
    testimonials: TestimonialInterface[]
    skillsInfos: SkillsInterface[]
    projects: ProjectInterface[]
}

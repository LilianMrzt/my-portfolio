import { type TestimonialInterface } from '@interfaces/api/TestimonialInterface'
import { type SkillsInterface } from '@interfaces/api/SkillsInterface'

export interface HomePageInterface {
    id: string
    introduction: string
    aboutMe: string
    testimonials: TestimonialInterface[]
    skills: SkillsInterface[]
}

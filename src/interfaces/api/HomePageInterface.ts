import { type TestimonialInterface } from '@interfaces/api/TestimonialInterface'

export interface HomePageInterface {
    id: string
    introduction: string
    aboutMe: string
    testimonials: TestimonialInterface[]
}

import React, { type ReactElement, useEffect, useState } from 'react'
import Carousel from '@components/common/carousel/Carousel'
import TestimonialsFixtures from '@constants/fixtures/TestimonialsFixtures.json'

const TestimonialsSections = (): ReactElement => {
    const [testimonials, setTestimonials] = useState<any>([])

    useEffect(() => {
        setTestimonials(TestimonialsFixtures)
    }, [])

    return (
        <div className={'d-flex flex-column align-center'}>
            <Carousel data={testimonials}/>
        </div>
    )
}

export default TestimonialsSections

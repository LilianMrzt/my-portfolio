import React, { type ReactElement, useEffect, useState } from 'react'
import Carousel from '@components/common/carousel/Carousel'
import TestimonialsFixtures from '@constants/fixtures/TestimonialsFixtures.json'
import Text from '@components/common/Text'

const TestimonialsSections = (): ReactElement => {
    const [testimonials, setTestimonials] = useState<any>([])

    useEffect(() => {
        setTestimonials(TestimonialsFixtures)
    }, [])

    return (
        <div className={'d-flex flex-column align-center pb-40'}>
            <Text
                fontWeight={'bold'}
                className={'mb-10'}
            >
                Témoignages
            </Text>
            <Text
                className={'mb-20'}
            >
                Qu&apos;ont pensé les personnes avec qui j&apos;ai travaillé?
            </Text>
            <Carousel data={testimonials}/>
        </div>
    )
}

export default TestimonialsSections

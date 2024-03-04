import React, { type ReactElement } from 'react'
import Carousel from '@components/common/carousel/Carousel'
import Text from '@components/common/Text'
import { useData } from '@utils/UseData'
import { useScreenSize } from '@utils/UseScreenSize'

const TestimonialsSections = (): ReactElement => {
    const { data } = useData()
    const { screenWidth } = useScreenSize()

    return (
        <div className={'mw-1512 w-100'}>
            <div className={`p-100px  ${screenWidth > 850 ? 'space-between' : 'justify-center'} d-flex flex-row align-center gap-30 pb-40 wrap`}>
                <div className={'w-300px'}>
                    <Text
                        fontWeight={'700'}
                        size={'40px'}
                        color={'primary'}
                        textAlign={'start'}
                        className={'mb-10'}
                    >
                        TÉMOIGNAGES
                    </Text>
                    <Text
                        size={'16px'}
                        font={'poppins'}
                        fontWeight={'400'}
                        className={'mb-20'}
                    >
                        Qu&apos;ont pensé les personnes avec qui j&apos;ai travaillé?
                    </Text>
                </div>
                <Carousel data={data?.testimonials ?? []}/>
            </div>
        </div>
    )
}

export default TestimonialsSections

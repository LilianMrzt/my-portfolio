import React, { type FC, type ReactElement } from 'react'
import Image from '@components/common/Image'
import { type CarouselItemProps } from '@interfaces/components/common/carousel/CarouselItemProps'
import Text from '@components/common/Text'

const CarouselItem: FC<CarouselItemProps> = ({
    slide
}): ReactElement => {
    return (
        <div className="d-inline-flex wrap h-100">
            <div className={'p-20 d-flex flex-column align-center justify-between'}>
                <Image
                    source={slide.picture}
                    round
                    backgroundColor={'primary'}
                    size={'150px'}
                />
                <Text
                    size={'large'}
                    className={'mt-30 mb-20'}
                    textAlign={'center'}
                >
                    {`"${slide.testimony}"`}
                </Text>
                <Text
                    size={'large'}
                    fontWeight={'bold'}
                >
                    {slide.name}
                </Text>
                <Text>{`${slide.job}, ${slide.company}`}</Text>
            </div>
        </div>
    )
}

export default CarouselItem

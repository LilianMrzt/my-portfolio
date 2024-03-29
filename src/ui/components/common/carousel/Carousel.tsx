import React, { type FC, type ReactElement, useState } from 'react'
import { type CarouselProps } from '@interfaces/components/common/CarouselProps'
import CarouselItem from '@components/common/carousel/CarouselItem'
import CarouselIndicator from '@components/common/carousel/CarouselIndicator'
import CarouselArrows from '@components/common/carousel/CarouselArrows'
import NoTestimonial from '@constants/fixtures/NoTestimonial.json'

const Carousel: FC<CarouselProps> = ({
    data
}): ReactElement => {
    const [activeIndex, setActiveIndex] = useState(0)

    const shownData = data || NoTestimonial

    const updateIndex = (newIndex: number): void => {
        if (newIndex < 0 && shownData.length !== 0) {
            newIndex = shownData.length - 1
        } else if (newIndex >= data.length) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    return (
        <div
            className={'d-flex flex-column gap-30'}
        >
            <div className={'d-flex shadow overflow-hidden flex-column w-700px border-radius-35px bg-surface justify-center'}>
                <div
                    className={'transform-6 nowrap w-700px'}
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}
                >
                    {shownData?.map((item: any, index: number) => (
                        <CarouselItem key={index} slide={item}/>
                    ))}
                </div>
            </div>
            <div className={'d-flex flex-row align-center space-between'}>
                <CarouselArrows
                    dataLength={shownData.length}
                    activeIndex={activeIndex}
                    updateIndex={updateIndex}
                />
                <div className={'d-flex gap-10 justify-center'}>
                    {shownData?.map((_: any, index: number) => (
                        <CarouselIndicator
                            key={index}
                            isActive={index === activeIndex}
                            setActive={() => { updateIndex(index) }}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Carousel

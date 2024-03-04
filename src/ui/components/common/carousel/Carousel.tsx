import React, { type FC, type ReactElement, useState } from 'react'
import { type CarouselProps } from '@interfaces/components/common/CarouselProps'
import CarouselItem from '@components/common/carousel/CarouselItem'
import CarouselIndicator from '@components/common/carousel/CarouselIndicator'
import CarouselArrows from '@components/common/carousel/CarouselArrows'
import NoTestimonial from '@constants/fixtures/NoTestimonial.json'
import ProjectCard from '@components/cards/ProjectCard'
import { useScreenSize } from '@utils/UseScreenSize'

const Carousel: FC<CarouselProps> = ({
    data,
    isProject = false
}): ReactElement => {
    const [activeIndex, setActiveIndex] = useState(0)
    const { screenWidth } = useScreenSize()

    const shownData = data ?? NoTestimonial

    const updateIndex = (newIndex: number): void => {
        if (newIndex < 0 && shownData.length !== 0) {
            newIndex = shownData.length - 1
        } else if (data?.length && newIndex >= data.length) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    return (
        <div
            className={`d-flex flex-column ${isProject && 'align-self-center'} gap-30`}
        >
            {isProject
                ? (
                    <div className={`d-flex overflow-hidden flex-column ${screenWidth > 850 ? 'w-450px' : 'w-350px'} justify-center pb-2px mt-30 pt-2px`}>
                        <div className={`transform-6 nowrap ${screenWidth > 850 ? 'w-450px' : 'w-350px'}`}
                            style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                            {data?.map((project: any, index: number) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                )
                : (
                    <div className={`d-flex shadow overflow-hidden flex-column ${screenWidth > 850 ? screenWidth > 1149 ? 'w-700px' : 'w-600px' : 'w-350px'}  border-radius-35px bg-surface justify-center`}>
                        <div
                            className={`transform-6 nowrap ${screenWidth > 850 ? screenWidth > 1149 ? 'w-700px' : 'w-600px' : 'w-350px'}`}
                            style={{ transform: `translate(-${activeIndex * 100}%)` }}
                        >
                            {shownData?.map((item: any, index: number) => (
                                <CarouselItem key={index} slide={item}/>
                            ))}
                        </div>
                    </div>
                )}

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

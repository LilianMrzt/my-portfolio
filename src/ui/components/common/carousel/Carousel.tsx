import React, { type FC, type ReactElement, useState } from 'react'
import { type CarouselProps } from '@interfaces/components/common/CarouselProps'
import CarouselItem from '@components/common/carousel/CarouselItem'
import IconButton from '@components/common/IconButton'
import { ArrowLeftIcon, ArrowRightIcon, RadioButtonIcon } from '@assets/Images'

const Carousel: FC<CarouselProps> = ({
    data
}): ReactElement => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex: number): void => {
        if (newIndex < 0) {
            newIndex = data.length - 1
        } else if (newIndex >= data.length) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    return (
        <div className={'d-flex overflow-hidden flex-column w-700px justify-center'}>
            <div
                className={'transform-3 nowrap w-700px'}
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
                {data?.map((item: any, index: number) => (
                    <CarouselItem key={index} slide={item}/>
                ))}
            </div>
            <div className={'d-flex space-between'}>
                <IconButton
                    icon={ArrowLeftIcon}
                    color={'primary'}
                    hoverEffect={false}
                    backgroundColor={'background'}
                    onClick={() => { updateIndex(activeIndex - 1) }}
                />
                <div className={'d-flex align-center'}>
                    {data?.map((data: any, index: number) => (
                        <IconButton
                            key={index}
                            icon={RadioButtonIcon}
                            color={index === activeIndex ? 'primary' : 'text'}
                            hoverEffect={false}
                            backgroundColor={'background'}
                            onClick={() => { updateIndex(index) }}
                            size={'small'}
                        />
                    ))}
                </div>
                <IconButton
                    icon={ArrowRightIcon}
                    color={'primary'}
                    hoverEffect={false}
                    backgroundColor={'background'}
                    onClick={() => { updateIndex(activeIndex + 1) }}
                />
            </div>
        </div>
    )
}

export default Carousel

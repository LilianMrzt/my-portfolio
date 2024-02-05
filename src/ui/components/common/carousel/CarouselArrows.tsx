import React, { type FC, type ReactElement } from 'react'
import Button from '@components/common/Button'
import { ArrowLeftIcon, ArrowRightIcon } from '@assets/Images'
import { type CarouselArrowsProps } from '@interfaces/components/common/carousel/CarouselArrowsProps'

const CarouselArrows: FC<CarouselArrowsProps> = ({
    updateIndex,
    activeIndex,
    dataLength
}): ReactElement => {
    return (
        <div className={'d-flex gap-10'}>
            <Button
                icon={ArrowLeftIcon}
                color={'primary'}
                effect={'darken'}
                backgroundColor={'background'}
                onClick={() => {
                    if (dataLength > 1) {
                        updateIndex(activeIndex - 1)
                    }
                }}
                size={'16px'}
                border={'primary'}
                rounded={false}
            />
            <Button
                icon={ArrowRightIcon}
                color={'primary'}
                effect={'darken'}
                backgroundColor={'background'}
                onClick={() => {
                    if (dataLength > 1) {
                        updateIndex(activeIndex + 1)
                    }
                }}
                size={'16px'}
                border={'primary'}
                rounded={false}
            />
        </div>
    )
}

export default CarouselArrows

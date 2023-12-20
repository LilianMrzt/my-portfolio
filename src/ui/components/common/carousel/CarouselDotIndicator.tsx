import React, { type FC, type ReactElement } from 'react'
import { type CarouselDotIndicatorProps } from '@interfaces/components/common/carousel/CarouselDotIndicatorProps'

const CarouselDotIndicator: FC<CarouselDotIndicatorProps> = ({
    isActive,
    setActive
}): ReactElement => {
    return (
        <div
            onClick={setActive}
            className={`w-small pointer aspect-1 border-round ${isActive ? 'bg-primary border-primary' : 'bg-background border-secondary'}`}
        />
    )
}

export default CarouselDotIndicator

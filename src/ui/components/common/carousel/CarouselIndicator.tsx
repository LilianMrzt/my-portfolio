import React, { type FC, type ReactElement } from 'react'
import { type CarouselDotIndicatorProps } from '@interfaces/components/common/carousel/CarouselDotIndicatorProps'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'

const CarouselIndicator: FC<CarouselDotIndicatorProps> = ({
    isActive,
    setActive
}): ReactElement => {
    const { theme } = useTheme()
    const isDarkTheme = theme === Theme.dark

    return (
        <div
            onClick={setActive}
            className={`w-30px h-6px pointer border-radius-small ${isActive ? isDarkTheme ? 'bg-secondary' : 'bg-tertiary' : isDarkTheme ? 'bg-primary' : 'bg-secondary'}`}
        />
    )
}

export default CarouselIndicator

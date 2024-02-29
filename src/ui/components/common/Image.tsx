import React, { type FC, type ReactElement } from 'react'
import { type ImageProps } from '@interfaces/components/common/ImageProps'

const Image: FC<ImageProps> = ({
    source,
    round = false,
    width = '270px',
    backgroundColor = 'background',
    square = true,
    height = 'auto'
}): ReactElement => {
    return (
        <img
            src={source}
            alt={source}
            className={`${round && 'border-round'} ${square && 'aspect-1'} bg-${backgroundColor} object-cover`}
            style={{
                width,
                height
            }}
        />
    )
}

export default Image

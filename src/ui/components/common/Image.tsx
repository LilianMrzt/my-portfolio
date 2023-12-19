import React, { type FC, type ReactElement } from 'react'
import { type ImageProps } from '@interfaces/components/common/ImageProps'

const Image: FC<ImageProps> = ({
    source,
    round = false,
    size = '270px',
    backgroundColor = 'background'
}): ReactElement => {
    return (
        <img
            src={source}
            alt={source}
            className={`${round && 'border-round'} aspect-1 bg-${backgroundColor} object-cover`}
            style={{
                width: size
            }}
        />
    )
}

export default Image

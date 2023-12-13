import React, { type FC, type ReactElement } from 'react'
import { ReactSVG } from 'react-svg'
import { type IconProps } from '@interfaces/components/common/IconProps'

const Icon: FC<IconProps> = ({
    src,
    color,
    size = 'medium',
    className
}): ReactElement => {
    return (
        <ReactSVG
            src={src}
            className={`w-${size} color-${color} ${className}`}
        />
    )
}

export default Icon

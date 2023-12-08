import React, { type FC, type ReactElement } from 'react'
import { type TextProps } from '@interfaces/components/common/TextProps'

const Text: FC<TextProps> = ({
    children,
    color = 'text',
    size = 'medium',
    className,
    fontWeight = 'normal'
}): ReactElement => {
    return (
        <p
            className={`p-0 m-0 color-${color} text-${size} ${className} font-${fontWeight}`}
        >
            {children}
        </p>
    )
}

export default Text

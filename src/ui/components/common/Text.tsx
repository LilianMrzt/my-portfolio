import React, { type FC, type ReactElement } from 'react'
import { type TextProps } from '@interfaces/components/common/TextProps'

const Text: FC<TextProps> = ({
    children,
    color = 'text',
    size = 'small',
    className,
    fontWeight = '400',
    textAlign = 'justify',
    font = 'khand',
    letterSpacing
}): ReactElement => {
    const lines = children.split('\n')

    return (
        <>
            {lines.map((line, index) => (
                <p
                    key={index}
                    className={`letter-spacing-${letterSpacing} font-${font} p-0 m-0 color-${color} text-${size} font-${fontWeight} ${index !== lines.length - 1 && 'mb-10'} text-${textAlign} ${className}`}
                >
                    {line}
                </p>
            ))}
        </>
    )
}

export default Text

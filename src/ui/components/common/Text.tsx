import React, { type FC, type ReactElement } from 'react'
import { type TextProps } from '@interfaces/components/common/TextProps'

const Text: FC<TextProps> = ({
    children,
    color = 'text',
    size = 'medium',
    className,
    fontWeight = 'normal',
    textAlign = 'justify'
}): ReactElement => {
    const lines = children.split('\n')

    if (lines.length > 1) {
        console.log(lines.length)
    }

    return (
        <>
            {lines.map((line, index) => (
                <p
                    key={index}
                    className={`p-0 m-0 color-${color} text-${size} ${className} font-${fontWeight} ${index !== lines.length - 1 && 'mb-10'} text-${textAlign}`}
                >
                    {line}
                </p>
            ))}
        </>
    )
}

export default Text

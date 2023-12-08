import React, { type FC, type ReactElement } from 'react'
import { type TextFieldProps } from '@interfaces/components/common/TextFieldProps'

const TextField: FC<TextFieldProps> = ({
    backgroundColor = 'background',
    borderColor = 'border',
    focusedBorderColor = 'primary',
    color = 'text',
    placeholder
}): ReactElement => {
    return (
        <input
            placeholder={placeholder}
            className={`
                bg-${backgroundColor} 
                p-10
                border-radius-small 
                border-${borderColor} 
                focused-border-${focusedBorderColor}
                color-${color}
            `}
        />
    )
}

export default TextField

import React, { type FC, type ReactElement, type ChangeEvent } from 'react'
import { type TextFieldProps } from '@interfaces/components/common/TextFieldProps'

const TextField: FC<TextFieldProps> = ({
    backgroundColor = 'background',
    borderColor = 'border',
    focusedBorderColor = 'primary',
    color = 'text',
    placeholder,
    className,
    value,
    setValue
}): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValue(event.target.value)
    }

    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={`
                bg-${backgroundColor} 
                p-10
                border-radius-small 
                border-${borderColor} 
                focused-border-${focusedBorderColor}
                color-${color}
                resize-none
                box-shadow-none
                font-arial
                mh-200
                ${className}
            `}
        />
    )
}

export default TextField

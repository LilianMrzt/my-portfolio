import React, { type FC, type ReactElement, type ChangeEvent, useCallback } from 'react'
import { type TextFieldProps } from '@interfaces/components/common/TextFieldProps'
import Text from '@components/common/Text'

const TextField: FC<TextFieldProps> = ({
    backgroundColor = 'background',
    borderColor = 'secondary',
    focusedBorderColor = 'primary',
    color = 'text',
    placeholder,
    className,
    value,
    setValue,
    label,
    multiline = false
}): ReactElement => {
    const CustomTextField = useCallback(
        ({ ...props }): ReactElement => {
            if (multiline) {
                return <textarea {...props} />
            } else {
                return <input type="text" {...props} />
            }
        },
        [multiline]
    )

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValue(event.target.value)
    }

    return (
        <div
            className={`${className} d-flex flex-column`}
        >
            <Text
                className={'mb-5'}
            >
                {label}
            </Text>
            <CustomTextField
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
                flex-1
                ${multiline && 'mh-200'}
            `}
            />
        </div>
    )
}

export default TextField

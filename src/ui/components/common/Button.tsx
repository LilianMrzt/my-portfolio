import React, { type FC } from 'react'
import Text from '@components/common/Text'
import { type ButtonProps } from '@interfaces/components/common/ButtonProps'

const Button: FC<ButtonProps> = ({
    label,
    className,
    backgroundColor = 'blackish',
    color = 'surface',
    onClick = () => {},
    padding = 10,
    size
}) => {
    return (
        <button
            className={`${className} p-${padding} border-none bg-${backgroundColor} pointer border-radius-small`}
            onClick={onClick}
        >
            <Text
                color={color}
                size={size}
            >
                {label}
            </Text>
        </button>
    )
}

export default Button

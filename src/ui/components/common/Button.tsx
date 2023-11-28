import React, { type FC } from 'react'
import Text from '@components/common/Text'
import { type ButtonProps } from '@interfaces/components/common/ButtonProps'

const Button: FC<ButtonProps> = ({
    label,
    className,
    backgroundColor = 'blackish',
    color = 'surface',
    onClick = () => {}
}) => {
    return (
        <button
            className={`${className} border-none bg-${backgroundColor} pointer border-radius-small p-10`}
            onClick={onClick}
        >
            <Text color={color}>
                {label}
            </Text>
        </button>
    )
}

export default Button

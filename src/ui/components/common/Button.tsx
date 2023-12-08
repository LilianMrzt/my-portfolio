import React, { type FC, useState } from 'react'
import Text from '@components/common/Text'
import { type ButtonProps } from '@interfaces/components/common/ButtonProps'

const Button: FC<ButtonProps> = ({
    label,
    className,
    backgroundColor = 'background',
    color = 'text',
    onClick = () => {},
    padding = 10,
    size,
    border = 'none',
    rounded = false,
    fontWeight,
    hoverEffect = true
}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = (): void => {
        setIsHovered(true)
    }

    const handleMouseLeave = (): void => {
        setIsHovered(false)
    }

    return (
        <button
            className={`
                ${className}
                p-${padding}
                ${rounded && 'rounded-button'}
                border-${border}
                bg-${hoverEffect && isHovered ? border : backgroundColor}
                pointer 
                border-radius-small
                pl-20 
                pr-20
            `}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Text
                color={hoverEffect && isHovered ? backgroundColor : color}
                size={size}
                fontWeight={fontWeight}
            >
                {label}
            </Text>
        </button>
    )
}

export default Button

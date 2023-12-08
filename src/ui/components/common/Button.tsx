import React, { type FC, useState } from 'react'
import Text from '@components/common/Text'
import { type ButtonProps } from '@interfaces/components/common/ButtonProps'

const Button: FC<ButtonProps> = ({
    label,
    size,
    fontWeight,
    className,
    backgroundColor = 'background',
    color = 'text',
    border = 'none',
    hoverColor,
    onClick = () => {},
    rounded = false
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
                p-10
                ${rounded && 'rounded-button'}
                border-${border}
                bg-${backgroundColor}
                hover-bg-${border} 
                pointer 
                border-radius-small
                pl-20 
                pr-20
                ${className}
            `}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Text
                color={hoverColor && isHovered ? hoverColor : color}
                size={size}
                fontWeight={fontWeight}
            >
                {label}
            </Text>
        </button>
    )
}

export default Button

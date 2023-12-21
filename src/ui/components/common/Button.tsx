import React, { type FC, type ReactElement, useCallback, useState } from 'react'
import Text from '@components/common/Text'
import { type ButtonProps } from '@interfaces/components/common/ButtonProps'
import { Link } from 'react-router-dom'

const Button: FC<ButtonProps> = ({
    label,
    size = 'medium',
    fontWeight = 'bold',
    className,
    backgroundColor = 'background',
    color = 'primary',
    border = 'primary',
    hoverColor = 'background',
    onClick = () => {},
    rounded = true,
    link
}) => {
    const CustomButton = useCallback(
        ({ ...props }): ReactElement => {
            if (link) {
                return <Link to={link} target="_blank" {...props} />
            } else {
                return <button {...props} />
            }
        },
        [link]
    )

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = (): void => {
        setIsHovered(true)
    }

    const handleMouseLeave = (): void => {
        setIsHovered(false)
    }

    return (
        <CustomButton
            className={`
                p-10
                ${rounded && 'rounded-button'}
                border-${border}
                bg-${backgroundColor}
                hover-bg-${border} 
                decoration-none
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
        </CustomButton>
    )
}

export default Button

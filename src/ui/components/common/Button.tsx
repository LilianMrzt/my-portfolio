import React, { type FC, type MouseEvent, type ReactElement, useCallback, useState } from 'react'
import Text from '@components/common/Text'
import { type ButtonProps } from '@interfaces/components/common/ButtonProps'
import { Link } from 'react-router-dom'
import { createRipple } from '@ui/animations/Animations'
import Icon from '@components/common/Icon'

const Button: FC<ButtonProps> = ({
    label,
    size = '16px',
    fontWeight = '700',
    className,
    backgroundColor = 'primary',
    color = 'background',
    border = 'none',
    hoverColor = 'background',
    onClick = () => {},
    rounded = true,
    link,
    animationFromCenter = true,
    effect = 'darken',
    icon,
    padding
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
                ${rounded && 'rounded-button'}
                border-${border}
                bg-${backgroundColor}
                ${effect === 'hover' && `hover-bg-${border} `}
                decoration-none
                pointer 
                border-radius-small
                relative
                overflow-hidden
                ${icon && !label && 'aspect-1'}
                ${className}
                d-flex
                p-0
            `}
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
                onClick()
                createRipple(event, animationFromCenter)
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`
                ${effect === 'darken' ? isHovered ? 'bg-shadow' : '' : ''}
                ${padding ? `p-${padding}` : icon && !label ? 'p-5' : 'p-10'}
                ${label && 'pl-20 pr-20'}
                flex-1
                transition-3
            `}>
                {icon && (
                    <Icon
                        src={icon}
                        className={'aspect-1 d-flex'}
                        size={'24px'}
                        color={hoverColor && isHovered && effect === 'hover' ? hoverColor : color}
                    />
                )}
                {label && (
                    <Text
                        color={hoverColor && isHovered && effect === 'hover' ? hoverColor : color}
                        size={size}
                        fontWeight={fontWeight}
                        font={'poppins'}
                        className={icon && 'ml-10'}
                    >
                        {label}
                    </Text>
                )}
            </div>
        </CustomButton>
    )
}

export default Button

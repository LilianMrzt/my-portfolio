import React, { type FC, type ReactElement } from 'react'
import { type IconButtonProps } from '@interfaces/components/common/IconButtonProps'
import Icon from '@components/common/Icon'

const IconButton: FC<IconButtonProps> = ({
    icon,
    size = 'medium',
    backgroundColor = 'blackish',
    color = 'surface',
    onClick = () => {},
    padding = 5,
    className,
    border = false,
    hoverEffect = true
}): ReactElement => {
    return (
        <button
            className={`
                ${hoverEffect && `hover-bg-${color} hover-${backgroundColor}`}
                ${border && `border-${color}`} 
                p-0 
                aspect-1 
                bg-${backgroundColor} 
                border-none 
                p-${padding} 
                color-${color} 
                border-round 
                ${className} 
                pointer
                align-center
                justify-center
            `}
            onClick={onClick}
        >
            <Icon
                src={icon}
                className={'aspect-1 d-flex'}
                size={size}
            />
        </button>
    )
}

export default IconButton

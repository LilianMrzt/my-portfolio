import React, { type FC, type ReactElement, useCallback } from 'react'
import { type IconButtonProps } from '@interfaces/components/common/IconButtonProps'
import Icon from '@components/common/Icon'
import { Link } from 'react-router-dom'

const IconButton: FC<IconButtonProps> = ({
    icon,
    size = 'medium',
    backgroundColor = 'blackish',
    color = 'surface',
    onClick = () => {},
    padding = 5,
    className,
    border = false,
    hoverEffect = true,
    link
}): ReactElement => {
    const CustomIconButton = useCallback(
        ({ ...props }): ReactElement => {
            if (link) {
                return <Link to={link} target="_blank" {...props} />
            } else {
                return <button {...props} />
            }
        },
        [link]
    )

    return (
        <CustomIconButton
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
        </CustomIconButton>
    )
}

export default IconButton

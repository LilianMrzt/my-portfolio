import React, { type FC } from 'react'
import './button.css'

interface ButtonProps {
    label: string
    type?: 'primary' | 'secondary'
    onClick: () => void
}

const ButtonThomas: FC<ButtonProps> = ({
    label,
    type = 'primary',
    onClick
}) => {
    return (
        <button
            className={`button ${type === 'primary' ? 'primary-button' : 'secondary-button'}`}
            onClick={onClick}
        >
            <div className={'hovered-button'}>
                {label}
            </div>
        </button>
    )
}

export default ButtonThomas

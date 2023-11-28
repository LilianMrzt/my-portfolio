import React, { type FC, type ReactElement } from 'react'
import { type IconButtonProps } from '@interfaces/components/common/IconButtonProps'
import { ReactSVG } from 'react-svg'

const IconButton: FC<IconButtonProps> = ({
  icon,
  size = 'medium',
  backgroundColor = 'blackish',
  color = 'surface',
  onClick = () => {},
  padding = 5,
  className,
  border
}): ReactElement => {
  return (
      <button
          className={`${border && `border-${color}`} p-0 aspect-1 bg-${backgroundColor} border-none p-${padding} color-${color} border-round ${className} pointer`}
          onClick={onClick}
      >
          <ReactSVG
              src={icon}
              className={`d-flex w-${size} aspect-1 transition-3`}
          />
      </button>
  )
}

export default IconButton

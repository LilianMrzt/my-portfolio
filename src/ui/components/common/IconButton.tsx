import React, { type FC, type ReactElement } from 'react'
import { type IconButtonProps } from '@interfaces/components/common/IconButtonProps'
import { ReactSVG } from 'react-svg'

const IconButton: FC<IconButtonProps> = ({
  icon,
  size = 'medium',
  backgroundColor = 'blackish',
  color = 'surface'
}): ReactElement => {
  return (
      <button
          className={`p-0 aspect-1 bg-${backgroundColor} border-none p-10 color-${color} border-round`}
      >
          <ReactSVG
              src={icon}
              className={`d-flex w-${size} aspect-1`}
          />
      </button>
  )
}

export default IconButton

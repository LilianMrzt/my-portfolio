import React, { type FC } from 'react'
import Text from '@components/common/Text'
import { type ButtonProps } from '@interfaces/components/ButtonProps'

const Button: FC<ButtonProps> = ({
  label,
  className,
  backgroundColor = 'blackish',
  color = 'surface'
}) => {
  return (
      <button
          className={`${className} border-none bg-${backgroundColor} pointer border-radius-small p-10`}
      >
            <Text color={color}>
                {label}
            </Text>
      </button>
  )
}

export default Button

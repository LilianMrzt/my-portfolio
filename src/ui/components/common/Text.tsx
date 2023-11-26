import React, { type FC } from 'react'
import { type TextProps } from '@interfaces/components/TextProps'

const Text: FC<TextProps> = ({
  children,
  color = 'text',
  size = 'medium'
}) => {
  return (
      <p
          className={`p-0 m-0 color-${color} text-${size}`}
      >
          {children}
      </p>
  )
}

export default Text

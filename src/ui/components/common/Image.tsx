import React, { type FC, type ReactElement } from 'react'
import { type ImageProps } from '@interfaces/components/common/ImageProps'

const Image: FC<ImageProps> = ({
  source,
  round = false,
  size = '18vw'
}): ReactElement => {
  return (
   <img
       src={source}
       alt={source}
       className={`${round && 'border-round'} shadow aspect-1`}
       style={{
         width: size
       }}
   />
  )
}

export default Image

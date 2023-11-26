import { type ColorsType } from '@interfaces/types/ColorsType'
import { type SizesType } from '@interfaces/types/SizesType'

export interface TextProps {
  children: string
  color?: ColorsType
  size?: SizesType
}

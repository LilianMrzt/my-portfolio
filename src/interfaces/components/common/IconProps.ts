import { type ColorsType } from '@interfaces/types/ColorsType'
import { type SizesType } from '@interfaces/types/SizesType'

export interface IconProps {
    src: string
    color?: ColorsType
    size?: SizesType
    className?: string
}

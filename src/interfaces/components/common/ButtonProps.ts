import { type ColorsType } from '@interfaces/types/ColorsType'
import { type SizesType } from '@interfaces/types/SizesType'
import { type FontWeightType } from '@interfaces/types/FontWeightType'

export interface ButtonProps {
    label: string
    className?: string
    backgroundColor?: ColorsType
    hoverColor?: ColorsType
    color?: ColorsType
    onClick?: () => void
    size?: SizesType
    border?: string
    rounded?: boolean
    fontWeight?: FontWeightType
}

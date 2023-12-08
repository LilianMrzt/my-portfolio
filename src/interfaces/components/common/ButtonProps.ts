import { type ColorsType } from '@interfaces/types/ColorsType'
import { type PaddingTypes } from '@interfaces/types/PaddingTypes'
import { type SizesType } from '@interfaces/types/SizesType'
import { type FontWeightType } from '@interfaces/types/FontWeightType'

export interface ButtonProps {
    label: string
    className?: string
    backgroundColor?: ColorsType
    color?: ColorsType
    onClick?: () => void
    padding?: PaddingTypes
    size?: SizesType
    border?: string
    rounded?: boolean
    hoverEffect?: boolean
    fontWeight?: FontWeightType
}

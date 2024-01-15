import { type ColorsType } from '@interfaces/types/ColorsType'
import { type SizesType } from '@interfaces/types/SizesType'
import { type FontWeightType } from '@interfaces/types/FontWeightType'
import { type EffectType } from '@interfaces/types/EffectType'
import { type PaddingTypes } from '@interfaces/types/PaddingTypes'

export interface ButtonProps {
    label?: string
    className?: string
    backgroundColor?: ColorsType
    hoverColor?: ColorsType
    color?: ColorsType
    onClick?: () => void
    size?: SizesType
    border?: ColorsType
    rounded?: boolean
    fontWeight?: FontWeightType
    link?: string
    animationFromCenter?: boolean
    effect?: EffectType
    icon?: string
    padding?: PaddingTypes
}

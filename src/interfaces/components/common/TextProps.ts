import { type ColorsType } from '@interfaces/types/ColorsType'
import { type SizesType } from '@interfaces/types/SizesType'
import { type FontWeightType } from '@interfaces/types/FontWeightType'
import { type TextAlignType } from '@interfaces/types/TextAlignType'
import { type FontTypes } from '@interfaces/types/FontTypes'

export interface TextProps {
    children?: string
    color?: ColorsType
    size?: SizesType
    className?: string
    fontWeight?: FontWeightType
    textAlign?: TextAlignType
    font?: FontTypes
    letterSpacing?: 'undefined' | '2px'
    lineHeight?: number
}

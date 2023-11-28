import { type ColorsType } from '@interfaces/types/ColorsType'
import { type PaddingTypes } from '@interfaces/types/PaddingTypes'
import { type SizesType } from '@interfaces/types/SizesType'

export interface ButtonProps {
    label: string
    className?: string
    backgroundColor?: ColorsType
    color?: ColorsType
    onClick?: () => void
    padding?: PaddingTypes
    size?: SizesType
}

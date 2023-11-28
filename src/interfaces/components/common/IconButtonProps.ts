import { type SizesType } from '@interfaces/types/SizesType'
import { type ColorsType } from '@interfaces/types/ColorsType'
import { type PaddingTypes } from '@interfaces/types/PaddingTypes'

export interface IconButtonProps {
    icon: string
    size?: SizesType
    backgroundColor?: ColorsType
    color?: ColorsType
    onClick?: () => void
    className?: string
    padding?: PaddingTypes
    border?: boolean
}

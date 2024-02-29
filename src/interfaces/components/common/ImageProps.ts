import { type ColorsType } from '@interfaces/types/ColorsType'

export interface ImageProps {
    source: string
    round?: boolean
    width?: string
    height?: string
    backgroundColor?: ColorsType
    square?: boolean
}

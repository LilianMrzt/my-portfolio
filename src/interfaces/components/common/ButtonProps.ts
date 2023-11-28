import { type ColorsType } from '@interfaces/types/ColorsType'

export interface ButtonProps {
    label: string
    className?: string
    backgroundColor?: ColorsType
    color?: ColorsType
    onClick?: () => void
}

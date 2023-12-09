import { type ColorsType } from '@interfaces/types/ColorsType'
import { type Dispatch } from 'react'

export interface TextFieldProps {
    backgroundColor?: ColorsType
    borderColor?: ColorsType
    focusedBorderColor?: ColorsType
    color?: ColorsType
    placeholder: string
    className?: string
    value: string
    setValue: Dispatch<string>
    label: string
    multiline?: boolean
}

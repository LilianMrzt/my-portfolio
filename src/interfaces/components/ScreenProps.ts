import { type ForwardedRef } from 'react'

export interface ScreenProps {
    id: string
    ref?: ForwardedRef<HTMLDivElement>
}

import { type ForwardedRef } from 'react'
import { type ThemeType } from '@interfaces/types/ThemeType'

export interface HomeScreenProps {
    id: string
    ref?: ForwardedRef<HTMLDivElement>
    theme: ThemeType
    toggleTheme: () => void
    handleClickScroll: (id: string) => void
}

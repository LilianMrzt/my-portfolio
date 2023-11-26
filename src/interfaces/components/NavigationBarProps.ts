import { type ThemeType } from '@interfaces/types/ThemeType'
import { type ChangeEvent } from 'react'

export interface NavigationBarProps {
  theme: ThemeType
  onChange: (theme: ChangeEvent<HTMLInputElement>) => void
}

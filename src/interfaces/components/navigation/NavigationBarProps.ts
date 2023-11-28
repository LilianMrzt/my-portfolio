import { type ThemeType } from '@interfaces/types/ThemeType'

export interface NavigationBarProps {
    theme: ThemeType
    toggleTheme: () => void
}

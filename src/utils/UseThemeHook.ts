import { useEffect, useState } from 'react'
import { type ThemeType } from '@interfaces/types/ThemeType'
import { LocalStorageKeysConstants } from '@constants/LocalStorageKeysConstants'
import { Theme } from '@constants/Constants'

type useThemeReturn = [ThemeType, () => void]

export const useTheme = (): useThemeReturn => {
  const storedTheme = localStorage.getItem(LocalStorageKeysConstants.theme)
  const initialTheme: ThemeType = storedTheme as ThemeType ?? Theme.light
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  const toggleTheme = (): void => {
    const newTheme: ThemeType = theme === Theme.light ? Theme.dark as ThemeType : Theme.light as ThemeType
    setTheme(newTheme)
    localStorage.setItem(LocalStorageKeysConstants.theme, newTheme)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return [theme, toggleTheme]
}

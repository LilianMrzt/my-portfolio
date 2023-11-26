import { useEffect, useState } from 'react'
import { type ChangeEvent } from 'react'
import { type ThemeType } from '@interfaces/types/ThemeType'
import { LocalStorageKeysConstants } from '@constants/LocalStorageKeysConstants'
import { Theme } from '@constants/Constants'

type useThemeReturn = [ThemeType, (e: ChangeEvent<HTMLInputElement>) => void]

export const useTheme = (): useThemeReturn => {
  const storedTheme = localStorage.getItem(LocalStorageKeysConstants.theme)
  const initialTheme: ThemeType = storedTheme as ThemeType ?? Theme.light
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newTheme: ThemeType = e.target.checked ? Theme.dark as ThemeType : Theme.light as ThemeType
    setTheme(newTheme)
    localStorage.setItem(LocalStorageKeysConstants.theme, newTheme)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return [theme, handleChange]
}

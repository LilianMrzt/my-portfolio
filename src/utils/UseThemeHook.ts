import { useEffect, useState } from 'react'
import { type ChangeEvent } from 'react'
import { type ThemeType } from '@interfaces/types/ThemeType'

type useThemeReturn = [ThemeType, (e: ChangeEvent<HTMLInputElement>) => void]

const localStorageKey = 'theme'

export const useTheme = (): useThemeReturn => {
  const storedTheme = localStorage.getItem(localStorageKey)
  const initialTheme: ThemeType = storedTheme as ThemeType ?? 'light'
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newTheme: ThemeType = e.target.checked ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(localStorageKey, newTheme)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return [theme, handleChange]
}

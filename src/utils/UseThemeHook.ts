import { useEffect, useState } from 'react'
import { type ChangeEvent } from 'react'
import { type ThemeType } from '@interfaces/types/ThemeType'

type useThemeReturn = [ ThemeType, (e: ChangeEvent<HTMLInputElement>) => void ]

export const useTheme = (initialTheme: ThemeType): useThemeReturn => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => { setTheme(e.target.checked ? 'dark' : 'light') }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return [theme, handleChange]
}

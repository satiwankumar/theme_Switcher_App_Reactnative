import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native';

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = async (newTheme) => {
    setTheme(newTheme)
    await AsyncStorage.setItem('theme', newTheme)
  }

  useEffect(() => {

    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme')
        setTheme(savedTheme)

      } catch (error) {
        console.log('Error Loading Theme: ', error)

      }
    }
    getTheme()
  }, [])




  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


export default ThemeContext;
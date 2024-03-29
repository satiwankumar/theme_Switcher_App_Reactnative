import React, { useContext } from 'react'
import Home from './components/Home'
import { ThemeProvider } from './context/themeContext'

type Props = {}

const App = (props: Props) => {



  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>



  )
}



export default App
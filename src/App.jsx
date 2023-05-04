import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes'

function App() {
  

  return (
    <BrowserRouter>
    <AppRoutes/>

    </BrowserRouter>  
  )
}

export default App

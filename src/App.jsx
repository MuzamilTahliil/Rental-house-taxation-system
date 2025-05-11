import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminSignup from './pages/adminSignup'
import SignInPage from './pages/adminSignup'
import AdminSignIn from './pages/adminSignin'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <Routes>
      <Route path="/" element={<AdminSignup/>} /> 
      <Route path="/signin" element={<AdminSignIn/>} /> 


    </Routes>
    
  )
}

export default App

import React from 'react'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
  return (
    <div>
      
      <Topbar/>
      <Register/>
      
    </div>
  )
}

export default App

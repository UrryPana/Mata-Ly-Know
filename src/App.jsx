import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './UI/pages/Home/LandingPage'
import Login from './UI/pages/Home/Login'
import MainDashboard from './UI/pages/Dashboard/MainDashboard'

export default function App() {
  
  return (
    <Routes>
      <Route path = "/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/dashboard' element={<MainDashboard/>}/>
    </Routes>
  )
}



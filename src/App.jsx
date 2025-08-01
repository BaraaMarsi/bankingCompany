import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Careers from './Pages/Careers/Careers'
import About from './Pages/About/About'
import Security from './Pages/Security/Security'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/about' element={<About />} />
        <Route path='/security' element={<Security />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

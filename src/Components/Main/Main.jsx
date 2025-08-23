import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/Home/Home"
import Careers from "../../Pages/Careers/Careers"
import About from "../../Pages/About/About"
import Security from "../../Pages/Security/Security"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/SignUp/SignUp"
import FaqDashboard from "../../Pages/FaqDashboard/FaqDashboard"
import ScrollToTop from "../ScrollToTop/ScrollToTop"


const Main = () => {
    return (
        <main>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/about' element={<About />} />
                <Route path='/security' element={<Security />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='dashboard' element={<FaqDashboard />}/>
            </Routes>
        </main>
    )
}

export default Main

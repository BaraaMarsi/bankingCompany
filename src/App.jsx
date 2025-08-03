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
      <Footer image="FooterIcons/yourBankLogo.png"
              links={[{url: "/" , content: "Home"}, {url: "/careers" , content: "Careers"}, {url: "/about" , content: "About"}, {url: "/security" , content: "Security"}]}
              contacts={[{call: "mailto:",img: "FooterIcons/email.png", alt: "email logo", text: "hello@skillbirdge.com"},
                          {call: "tel:",img: "FooterIcons/telephone.png", alt: "telephone logo", text: "+91 91813 23 2309"},
                          {call: "https://2u.pw/c1nfT",img: "FooterIcons/location.png", alt: "location logo", text: "Somewhere in the World"}
              ]}
              socials={[{img: "FooterIcons/facebook.svg", alt: "facebook logo"}, {img: "FooterIcons/twitter.svg", alt: "twitter logo"}, {img: "FooterIcons/linkedin.svg", alt: "linkedin logo"}]}
              copyRights="YourBank All Rights Reserved"
              terms={[{content: "Privacy Policy"}, {content: "Terms of Service"}]}
      />
    </>
  )
}

export default App

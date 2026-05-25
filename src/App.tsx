import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import CustomCursor from "./components/common/CustomCursor"
import Footer from "./components/layout/Footer"
import BlurScreen from "./components/common/BlurScreen"
import Chatbot from "./components/common/Chatbot"


function App() {

  return (
    <>
    <CustomCursor/>
    <Navbar/>
    <Outlet/>
    <Footer/>
   <Chatbot/>

    </>
  )
}

export default App

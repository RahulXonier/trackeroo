import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import CustomCursor from "./components/common/CustomCursor"


function App() {

  return (
    <>
    <CustomCursor/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App

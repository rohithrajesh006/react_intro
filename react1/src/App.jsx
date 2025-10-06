import { Routes,Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./components/pages/home"
import Login from "./components/pages/login"
import Register from "./components/pages/register"

function App() {
 

  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
      
    </>
  )
}

export default App

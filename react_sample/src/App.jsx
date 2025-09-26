
import All_users from "./Components/all_users";
import Navbar from "./Components/navbar";
import Counter from "./Components/counter";
import Adduser from "./Components/Adduser";
import Login from "./Components/login";
import Home from "./Components/home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/allusers" element={<All_users/>}/>
      </Routes>
    </BrowserRouter>
       
    
      {/*<Navbar/>
      <h1>Welcome</h1>
      <All_users/>
      <Counter/>
      <Adduser/>*/}
      
    </>
    
    
  )
}

export default App;

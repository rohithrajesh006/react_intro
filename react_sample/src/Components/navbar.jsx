import { Link } from "react-router-dom";

function Navbar(){
    const islogged=false
    return(
        <nav>
            {islogged?<button>Logout</button>:<button>Login</button>}


            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/allusers">AllUsers</Link>
            
        </nav>
    )
}
export default Navbar;
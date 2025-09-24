function Navbar(){
    const islogged=false
    return(
        <nav>
            {islogged?<button>Logout</button>:<button>Login</button>}
        </nav>
    )
}
export default Navbar;
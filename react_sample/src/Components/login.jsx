import { useState } from "react";

function Login(){
    const [data,setData]=useState({
        fullname:"",
        email:"",
        password:""
    });
     const handleChange=(e)=>{
        const{name,value}=e.target;
        
        setData((prev)=>({...prev,[name]:value}))
     }
     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
     }

    return(
        <>
        <div>
            <h2>Login</h2>
        <form onSubmit={handleSubmit}>   
          <input type="text" name="fullname" placeholder="Fullname" value={data.fullname} onChange={handleChange} /><br />
          <input type="password" name="password" placeholder="password"value={data.password} onChange={handleChange}  /><br />
          <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} /><br />
          <input type="submit" value="Login"/>
        </form>   
        </div>
        </>
    )

}
export default Login;
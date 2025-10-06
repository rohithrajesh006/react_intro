import { useState } from "react";
function Register(){
     const [data,setdata]=useState({
            full_name:"",
            email:""
        });
        const handleData=(e)=>{
            const{name,value}=e.target;
            setdata((prev)=>({...prev,[name]:value}))
            console.log(data)
        }

        const handleSubmit=(e)=>{
            e.preventDefault()
            console.log(data)
            alert("Hello" +data["full_name"])
        }
    return(
        <>
          <h1 style={{color:"red",textAlign:"center"}}>Register</h1>

          <form onSubmit={handleSubmit}>

            <label>Fullname</label>
            <input type="text" name="full_name" value={data.full_name} onChange={handleData} />
            <br /><br />
            <label>Email</label>
            <input type="email" name="email"value={data.email} onChange={handleData} />
            <br />
            <input type="submit" value="Register" />
          </form>
        
        </>
        
    )
}
export default Register;
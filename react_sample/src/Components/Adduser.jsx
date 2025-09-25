import { useState } from "react";


function Adduser(){
    
    const[fullname,setName]=useState("")

    function handleSubmit(e){
        e.preventDefault()

        console.log(fullname)
    }


    return(
        <div>
            <h2>Register</h2>
            <form action="">
                <input type="text" name="fullname" onChange={(e)=>setName(e.target.value)} placeholder="Fullname"/>
                <button type="submit">Register</button>
            </form>
        </div>

    )
}
export default Adduser;
function Profile(props){
    const handleClick=(name)=>{
        console.log("Viewing "+name)
    }
    return(
        <>
         <ul>
            <li>Name : {props.name}</li>
            <li>Age : {props.age}</li>
            <li>course : {props.course}</li>
         </ul>
         <button onClick={()=>handleClick(props.name)}>click</button>
        </>
    )
}
export default Profile;
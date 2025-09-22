function Profile(props){
    return(
        <>
         <ul>
            <li>Name : {props.name}</li>
            <li>Age : {props.age}</li>
            <li>course : {props.course}</li>
         </ul>
         <button>click</button>
        </>
    )
}
export default Profile;
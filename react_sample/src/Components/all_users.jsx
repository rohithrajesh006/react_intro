import Profile from "./profile";
function All_users(){
  const users=[
    {
      id:1,
      name:"jessin",
      age:21,
      course:"python"
    },
    {
      id:2,
      name:"Rohith",
      age:21,
      course:"python"
    },
    {
      id:3,
      name:"Zaman",
      age:21,
      course:"python"
    }
  ];
    return(
        <>
          <div>
             {users.map(user=>(
              <Profile key={user.id} name={user.name} age={user.age} course={user.course}/>
             ))}
           
          </div>
        </>
    )
}
export default All_users;
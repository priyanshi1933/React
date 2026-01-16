import { useContext, useEffect } from "react"
import UserProvider, { UserContext } from "./contexts/UserContext"
function UserDetails(){
    const {user}=useContext(UserContext)
    return(
        <>
        <p>User Name:{user.name}</p>
        <p>User Email:{user.email}</p>
        </>
    )
}
function AnotherComponent(){
    const{user,setUser}=useContext(UserContext)
    useEffect(()=>{
        setUser({
            name:"Priyanshi",
            email:"p@gmail.com"
        })
    },[])
return(
        <>
        <p>Some other component</p>
        </>
    )
}
function Initial(){
    return(
        <div>
  <UserProvider>
        <UserDetails/>
        <AnotherComponent/>
      </UserProvider>
        </div>
    )
}
export default Initial
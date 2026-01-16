import React from "react"
import { useParams } from "react-router-dom"
type UserParams={
    userId:string
}
const User:React.FC=()=>{
    const {userId}=useParams<UserParams>();
    return(
        <h1 className="container">User Page for ID:{userId}</h1>
    )
}
export default User;
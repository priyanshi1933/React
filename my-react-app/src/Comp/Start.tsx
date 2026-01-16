
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteActiveUser, getActiveUser, type IUserModel } from '../LocalStorage';
const Start=()=>{
    const [activeUser,setActiveUser]=useState<IUserModel>();
    const navigate=useNavigate();
    useEffect(()=>{
        const data=getActiveUser();
        if(data==null){
            navigate('/login')
        }
        setActiveUser(data)
    },[])
    const handleLogOut=()=>{
        deleteActiveUser();  
        navigate('/login')  
    }
    return <>
    <div >WELCOME {activeUser?.name}</div>
    <button onClick={handleLogOut}>Logout</button>
    </>
}
export default Start;
import React,{useState,type ChangeEvent, type FormEvent} from "react";

interface FormData{
    name:string,
    email:string
}

const ControlledInput:React.FC=()=>{
    const [data,setData]=useState<FormData>({
        name:"",
        email:""
    })
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setData((prev)=>({
            ...prev,[name]:value
        }))
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert(`Form Submitted with ${JSON.stringify(data)}`)
    }
    return(
        <>
            <form method="post" onSubmit={handleSubmit}>
                <center><h1>Controlled Form Component</h1></center>
            <input type="text" className="form-control mt-5" name="name" value={data.name} placeholder="Enter Name" onChange={handleChange}/>
            <input type="email" className="form-control mt-5" name="email" value={data.email} placeholder="Enter Email" onChange={handleChange}/>
            <button type="submit" className="btn btn-primary mt-5 btn-lg">Submit</button>
            </form>
        </>
    )
}
export default ControlledInput;
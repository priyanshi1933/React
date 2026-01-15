import React,{useState} from "react";
interface IState{
    name:string,
    title:string
}
interface IPROPS{
    name:string,
    title:string,
    age?:number
}
let Customer:React.FC<IPROPS>=({name,title,age})=>{
    const [state,setState]=useState<IState>({name:"Priyanshi",title:"Mern Stack"})
    return(
        <div>
            <h1>Customer Component</h1>
            <h4>Name:{name}</h4>
            <h4>Title:{title}</h4>
            <h4>Age:{age}</h4>
            <div className="col-md-4 card p-2">
                <h1>Values Form State</h1>
                <h4>Name:{state.name}</h4>
                <h4>Title:{state.title}</h4>
            </div>
        </div>
    )
}
export default Customer;
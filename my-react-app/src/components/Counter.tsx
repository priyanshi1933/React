import React ,{useState} from "react"
interface IState{
    count:number
}
const Counter:React.FC=()=>{
    const[state,setState]=useState<IState>({count:0})

    //add
    const handleIncrement=()=>{
        setState({count:state.count+1})
    }

    //decrement
    const handleDecrement=()=>{
        if(state.count>0)
            setState({count:state.count-1})
        else
            setState({count:0})
    }

    return(
        <>
            <h1>Counter Component</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="display-3">{state.count}</h2>
                            <button className="btn btn-success ms-3" onClick={handleIncrement}>INC</button>
                            <button className="btn btn-danger ms-3" onClick={handleDecrement}>DEC</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;
import { addNewUser, isUserAlreadyRegistered, type IUserModel } from '../LocalStorage';
import './Style.css'
import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState<IUserModel>({
        name: "",
        username: "",
        password: ""
    })
    const [message, setMessage] = useState<string>("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.id;
        const value = event.target.value;
        setData({ ...data, [id]: value })
        setMessage("");
    }
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (data.name == "" || data.username == "" || data.password == "") {
            setMessage("Please fill the form");
            return;
        }
        if(isUserAlreadyRegistered(data.username)){
            setMessage('User already exist.');
            return;
        }
        addNewUser(data);
        setMessage('User created. Click on Login');
        setData({
        name: "",
        username: "",
        password: ""
    });
    }

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <h3>Register Here</h3>

                <label >Name</label>
                <input type="text" placeholder="Email or Phone" id="name" value={data.name} onChange={handleInputChange} />

                <label >Username</label>
                <input type="text" placeholder="Email or Phone" id="username" value={data.username} onChange={handleInputChange} />

                <label>Password</label>
                <input type="password" placeholder="Password" id="password" value={data.password} onChange={handleInputChange} />

                <button>Register</button>
                <div className="social">
                    {message && <p>{message}</p>}
                    <h4>Login</h4>
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </>
    )
}
export default Register;
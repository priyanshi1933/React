

import { Greet } from "./components/Greet"
import { LoggedIn } from "./components/LoggedIn"
import Product from "./components/Product"
import './App.css'
import Customer from "./components/Customer"
import Counter from "./components/Counter"
import MyComponent from "./components/MyComponent"
import Api from "./components/Api"
import Youtube from "./components/Youtube"
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import User from "./components/User"
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import ControlledInput from "./components/ControlledInput"
import Register from "./Comp/Register"
import Login from "./Comp/Login"
import Start from "./Comp/Start"
import { getActiveUser } from "./LocalStorage"
import UserProvider from "./contexts/UserContext"
import Initial from "./Initial"
import ErrorBoundary from "./components/ErrorBoundary"
import MyComp from "./components/MyComp"
import UsersTable from "./components/UsersTable"

function App() {


  return (
    <>
      <div className="container">
        {/* <Product pCode={1} pName="Apple"/> */}
        {/* <Greet name="Priyanshi"/> */}
        {/* <LoggedIn/> */}
        {/* <Customer name="Priyanshi" title="developer" age={25} /> */}
        {/* <Counter /> */}
        {/* <MyComponent/> */}
        {/* <Api/> */}
        {/* <Youtube/> */}
        {/* <Nav/> */}
        {/* <ControlledInput/> */}
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <Initial/> */}
        {/* <ErrorBoundary>
          <MyComp/>
        </ErrorBoundary> */}
        <UsersTable/>

      </div>
      {/* <Routes>
        <Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Start />}></Route>
          </Route>
        </Route>
      </Routes> */}

    </>
  )
}
const PrivateRoute = () => {
  const activeUser = getActiveUser();
  if (activeUser == null)
    return <Navigate to={"/login"} />
  return <Outlet />
}
export default App

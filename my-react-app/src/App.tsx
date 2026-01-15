

import { Greet } from "./components/Greet"
import { LoggedIn } from "./components/LoggedIn"
import Product from "./components/Product"
import './App.css'
import Customer from "./components/Customer"
import Counter from "./components/Counter"
import MyComponent from "./components/MyComponent"
import Api from "./components/Api"
import Youtube from "./components/Youtube"

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
        <Youtube/>
      </div>

    </>
  )
}

export default App

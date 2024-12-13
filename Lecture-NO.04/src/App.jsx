import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Product from "./Pages/ProductPage"
import ProductDetail from "./Pages/ProductDetail"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login-page" element = {<Login />}></Route>
        <Route path="/sign-up" element = {<SignUp/>}></Route>
        <Route path="/product-page" element = {<Product/>}></Route>
        <Route path="/product-details" element = {<ProductDetail />}></Route>
      </Routes>
    </>
  )
}

export default App

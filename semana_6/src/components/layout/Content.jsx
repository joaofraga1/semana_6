import React from "react"
import './Content.css'
import {Routes,Route} from 'react-router-dom'
import Login from "./Login"
import About from "../../views/About"
import Home from "../../views/Home"

const Content = props => (

   <main className="Content">
         <Routes>
            <Route path="/about" element = {<About/>}></Route>
            <Route path="/login" element = {<Login/>}></Route>
            <Route path="/" element = {<Home/>}></Route>
         </Routes>
   </main>


)

export default Content
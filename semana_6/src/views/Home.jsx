import React, { useState } from "react"
import { useEffect } from "react";
import './Home.css'

function produto(a,b){

    return a*b



}

const Home = props => {
    
    const [num1,Setnum1]=useState(0)
    const [num2,Setnum2]=useState(0)
    const [prod,SetProd]=useState(0)

    useEffect(function() {
            SetProd(produto(num1,num2))
    },[num1])
    useEffect(function() {
            SetProd(produto(num1,num2))
    },[num2])

   return(
   <div className="home">
       <div className="box">

            <div className="functionvalue">
                <span>{prod}</span>

            </div>
            
            <div className="usestatefunction">

               <input type="number" className="num" 
               value={num1} onChange={e => Setnum1(e.target.value)} /> 
               <span>X</span>
               <input type="number" className="num" 
               value={num2} onChange={e => Setnum2(e.target.value)} /> 

            </div>

       </div>


    </div>
   )
}

export default Home
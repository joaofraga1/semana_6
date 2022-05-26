import './About.css'
import React, { useState } from "react"
import { useEffect } from "react";


function potencia (base,expoente) {

    
    let resposta=1;
    if(expoente>=0)
        for(let i=0;i<expoente;i++)
             resposta*=base
    else
        for(let i=0;i>expoente;i--)   
            resposta/=base    



    return resposta

}
const About = props => {

    const [base,SetBase]=useState(0)
    const [expoente,SetExpoente]=useState(0)
    const [pot,SetPot]=useState("inderteminado")

    useEffect(function() {
            SetPot(potencia(base,expoente))
    },[base])
    useEffect(function() {
        SetPot(potencia(base,expoente))
},[expoente])

  return(
      
    <div className="about">
    <div className="box">

         <div className="functionvalue">
             <span>{pot}</span>

         </div>
         
         <div className="usestatefunction">

            <input type="number" className="num" 
            value={base} onChange={e => SetBase(e.target.value)} /> 
            <span>^</span>
            <input type="number" className="num" 
            value={expoente} onChange={e => SetExpoente(e.target.value)} /> 

         </div>

    </div>


 </div>
)
}

export default About
import React, { useState } from "react"
import './Login.css'

const Login = (props) => {

   const [name,SetName] = useState('')
   const [password,SetPassword] = useState('')
   
   return (
    <div className="login" >
       <div className="login-box"> 
           <div class="Content">    
             <div class="head-title">
                <h1>Login</h1>
                <br />
             </div>
             <form action="Get your Info.php">
                <label for="Name">Nome</label>
                
                <input type="name" name="name" id="name" placeholder="Digite seu nome" color="white"
                value={name} onChange={e => SetName(e.target.value)} />
                <br />
                <label for="password">Senha</label>
                
                <input type="password" name="password" id="password" placeholder="*******"
                value={password} onChange={e => SetPassword(e.target.value)} />
             </form>
             
             <div className="botao"><a href="#">Login</a></div>
           </div>
        </div>
    </div>
   )

 }

export default Login
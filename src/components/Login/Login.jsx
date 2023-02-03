import { useState } from 'react'
import './login.css'

const Login = ({setMensaje}) => {
    const [email, setEmail]=useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(email.trim()=== 'adl@desafiolatam.com' && password.trim()==='252525')
        {  
            setMensaje({msg: "Sesion Iniciada Correctamente", color:"success"});
        }else{
            setMensaje({msg: "Los Datos No son Correctos", color:"danger"});
        }
        
    }
  return (
    <div className='grid-container'>
        <div className="mb-3 form-check"></div>
        <div className="mb-3 form-check"></div>
        <div className="mb-3 form-check"></div>
        <div className='login-container'>

            <form onSubmit={handleSubmit}>

            <div className="mb-3 form-check"></div>
  
                <div classname="boxText">
                    <input id='idEmail' type="email" placeholder='Ingresa tu Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="idEmail">E m a i l</label>
                </div>

                <div classname="boxText">
                    <input id='IdPass' type="password" placeholder='Ingresa tu Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="IdPass">P a s s w o r d</label>  
                </div>
                    
            <div className="mb-3 form-check"></div>
                <div className='buttonInit'>
                    <button className="button-class btn" disabled={!email.trim() || !password.trim()}>I n i c i a r</button>
                </div>
                <div className="mb-3 form-check"></div>
                
            </form>   
        </div>      
    </div>
  )
}

export default Login

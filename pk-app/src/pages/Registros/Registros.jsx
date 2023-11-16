import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Registros.css"


function Registros() {
    const navigation = useNavigate();
function handleLogin(){
    navigation('/Login')
}

  return (
    <div>
        <div className='register'>

<form className="form">
    <p className="title">Register </p>
    <p className="message">Regístrese ahora y obtenga acceso completo a nuestra aplicación. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Nombre:</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Apellido:</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email:</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Contraseña:</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirmar Contraseña:</span>
    </label>
    <button className="submit" onClick={handleLogin} >Enviar</button>
    <p className="signin" onClick={handleLogin} >¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a> </p>
</form>

</div>

    </div>
  )
}

export default Registros
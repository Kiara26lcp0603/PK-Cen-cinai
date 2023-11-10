import React from 'react'
import "./Registros.css"
import { useNavigate } from 'react-router-dom';

function Registros() {

    const navigation = useNavigate();
    function handleRegister() {
       
        navigation('/login')
    }

    return (
        <div>
            <form className="form">
                <p className="title">Registro </p>
                <p className="message">Registrate para acceder a la app </p>
                <div className="flex">
                    <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>Nombre:</span>
                    </label>

                    <label>
                        <input className="input" type="text" placeholder="" required="" />
                        <span>Apellido:</span>
                    </label>
                </div>

                <label>
                    <input className="input" type="email" placeholder="" required="" />
                    <span>Email:</span>
                </label>

                <label>
                    <input className="input" type="password" placeholder="" required="" />
                    <span>Contraseña:</span>
                </label>
                <label>
                    <input className="input" type="password" placeholder="" required="" />
                    <span>Confirmar Contraseña:</span>
                </label>
                <button className="submit" onClick={handleRegister} >Submit</button>
                <p className="signin">¿Ya tienes una cuenta? ? <a href="#">Signin</a> </p>
            </form>


        </div>
    )
}

export default Registros
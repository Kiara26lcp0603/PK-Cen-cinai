import React, { useEffect, useState } from 'react'
import "./main.css"
import { useNavigate } from 'react-router-dom';


function Main() {

  const [prueba, setPrueba] = useState('admin');
  const navigation = useNavigate();

  function handlerEntregaLeche() {

    navigation('/Leche_daf')
  }
function cuidoNiñosPendiente(){

  navigation('/Cuido')
}
  return (

    <div className="hola">
      {prueba == 'user' ? (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Cuido de infantes</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Entrega de alimentos (DAF)</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Entrega leche</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Madres lactantes</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="#">Home</a>
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"> Citas para cuido </a>
                  <button class="learn-more" onClick={cuidoNiñosPendiente}> Revisar
                  </button>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pendientes, entrega de leche </a>
                  <button class="learn-more"> Revisar
                  </button>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pendientes entregas de alimentos</a>
                  <button class="learn-more"> Revisar
                  </button>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pendientes , entrega de leche y (DAF)</a>
                  <button class="learn-more" onClick={handlerEntregaLeche}>Revisar
                  </button>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pendientes, madres lactantes  </a>
                  <button class="learn-more"> Revisar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      )}

    </div>
  )
}

export default Main;
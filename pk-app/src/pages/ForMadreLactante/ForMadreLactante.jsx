import React from 'react'
import './ForMadreLactante.css'
import { useNavigate } from 'react-router-dom';


function ForMadreLactante() {

const navigation = useNavigate();

  function handleCuido() {
    navigation('/main')
  }

  return (
    <div className='mama'>

<div id='pinito'>
  
<button class="btn" onClick={handleCuido}>
    <div class="wrapper">
        <p class="text">Home </p>

        <div class="flower flower1">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower2">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower3">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower4">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower5">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower6">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
    </div>
</button>

      <h1 className='condensada'>Form para entrega de leche :</h1>
    </div>

    <br />
  
    <div className='all-leches'>

      <div className='lechosos'>
        <p>Tipo de usuario:</p>
        <input autocomplete="off" placeholder="Usuario" type="text" />
            
        <p>Región:</p>
        <input type="text" placeholder='region' autocomplete="off" />
              
        <p>Nombre:</p>
        <input type="text" placeholder='Nombre' autoComplete='off' />
        <br />
        
        <p>Número de teléfono:</p>
        <input type="text" placeholder='teléfono' autoComplete='off' />
        <br />
  
        <p>Email:</p>
        <input type="text" placeholder='Email' autoComplete='off' />
      </div>
  
    <br />
  
      <div className='lechoso'>
              <p>Dirección de domicilio:</p>
              <input type="text" placeholder='Dirección' autoComplete='off' />
  
              <p>Estado de cuenta:  ejemplo:(activo-inactivo)</p>
              <input type="text" placeholder='Activo-inactivo' autoComplete='off' />
            
              <p>cédula de identidad de todos los familiares dentro del hogar:</p>
              <input type="text" placeholder='cédulas' autoComplete='off' />
        
              <p>Contraseña:</p>
              <input type="text" placeholder='Contraseña' autoComplete='off' />
            
              <p>Ingresos mensuales:</p>
              <input type="text" placeholder='ingresos' autoComplete='off' />

              <br />
              <br />

              <button class="btn">
    <div class="wrapper">
        <p class="text">Enviar </p>

        <div class="flower flower1">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower2">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower3">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower4">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower5">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower6">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
    </div>
</button>
<br />
<br />
  
      </div>

    </div>
        
    </div>
  )
}

export default ForMadreLactante
import React from 'react'
import "./Cuido.css"
import { useNavigate } from 'react-router-dom';

function Cuido() {

const navigation = useNavigate();

function handleCuido() {

    navigation('/main')
  }

  return (
<div className='cuido' >

  <div id='adios'>

<buutton class="Butn" onClick={handleCuido}>Home</buutton>


    <h1 className='holas'>Form para cuido de niños en el Cen-cinai :</h1>
  </div>
  <br />

  <div className='all-forms'>
    <div className='forma'>
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

    <div className='formado'>
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
           
<buutton class="Butn">Enviar</buutton>


    </div>
  </div>
</div>
 

  )
}

export default Cuido
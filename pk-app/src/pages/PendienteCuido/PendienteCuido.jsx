import React from 'react'
import { useNavigate } from 'react-router-dom';


function PendienteCuido() {

    const navigation = useNavigate();

    function handlePendienteCuido() {

        navigation('/main')
      }


  return (
 <div>
  
 </div>
  )
}

export default PendienteCuido;
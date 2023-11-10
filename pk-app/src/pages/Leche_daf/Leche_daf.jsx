import React, { useEffect, useState } from 'react'

function Leche_daf() {
  const [prueba, setprueba] = useState([]);



  useEffect(() => {
   const prueba2 = [
      { id: 1, name: 'Ejemplo 1', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 2, name: 'Ejemplo 2', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 3, name: 'Ejemplo 3', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 4, name: 'Ejemplo 4', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 5, name: 'Ejemplo 5', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 6, name: 'Ejemplo 6', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 7, name: 'Ejemplo 7', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 8, name: 'Ejemplo 8', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 9, name: 'Ejemplo 9', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 10, name: 'Ejemplo 10', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 11, name: 'Ejemplo 11', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 12, name: 'Ejemplo 12', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 13, name: 'Ejemplo 13', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 14, name: 'Ejemplo 14', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      { id: 15, name: 'Ejemplo 15', Enero: 'L , DAF', Febrero: 'L , DAF', Marzo: 'L , DAF', Abril: 'L , DAF', Mayo: 'L , DAF', Junio: 'L , DAF', julio: 'L , DAF', Agosto: 'L , DAF', Sept: 'L , DAF', Oct: 'L , DAF', Nov: 'L , DAF', Dic: 'L , DAF' },
      // ... más datos
    ];

    setprueba(prueba2)

  }, []);




  return (
    <div>

      <h2>Ejemplo de Tabla</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Enero</th>
            <th>Febrero</th>
            <th>Marzo</th>
            <th>Abril</th>
            <th>Mayo</th>
            <th>Junio</th>
            <th>Julio</th>
            <th>Agosto</th>
            <th>Sep</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dic</th>
          </tr>
        </thead>
        <tbody>
          {prueba.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.Enero}</td>
              <td>{item.Febrero}</td>
              <td>{item.Marzo}</td>
              <td>{item.Abril}</td>
              <td>{item.Mayo}</td>
              <td>{item.Junio}</td>
              <td>{item.Julio}</td>
              <td>{item.Agosto}</td>
              <td>{item.Sept}</td>
              <td>{item.Oct}</td>
              <td>{item.Nov}</td>
              <td>{item.Dic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Leche_daf
import React, { useEffect, useState } from 'react'
import "./main.css"
import { useNavigate } from 'react-router-dom';
import mocosos from '../../assets/img/mocosos.png';
import fondo from '../../assets/img/fondo.jpg';
import mamita from '../../assets/img/mamita.jpg';

function Main() {

  const [prueba, setPrueba] = useState('user');
  const navigation = useNavigate();

  function handlerEntregaLeche() {
    navigation('/Leche_daf')
  }

function cuidoNiñosPendiente(){
  navigation('/CuidoPendiente')
}

function CuidoNiñosCen(){
navigation('/Cuido')
}

function FormAlimentos(){
navigation('/FormAlimentos')
}

function FormLeche(){
navigation('/FormLeche')
}

function ForMadreLactante(){
navigation('/ForMadreLactante')
}

  return (

      
    <div className="hola">

       <div class="area"></div><nav class="main-menu">
                  <ul>
                      <li>
                          <a href="https://jbfarrow.com">
                       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD50lEQVR4nO2Y/28TZRzHj9/gF/yN/8FIQvQPgB9M7FN6p5G1CDojkVaBxGSGKKuYTPkWA9ojG4uBqxgGC2yGcdfBtVstg7DgoFfbyQgBGdCtHZHoD/auvdIr/ZhnWwc01z639boMvHfyTvPkes/zfj2fz6c/lKIsWbJkyVIjBEHmHQgyl0BklFkPgUgzVIN1cifqbv/UrrVtRoDdvs1eOPWF7eS8NoEg/R0EGdC1SO9vVPjjLSjpdSHQ888tKDmfm4eaDjF0I27eWyV82cdb0OWvNiKm7aN1y2sBXCICiPRFswE6ttszJICObUj1ulDJ67I9bG1Cb+kDiLRMBAjSGbMBunbatcrAuzc+v257H5VanSg0s7bldzWh1xcIwPxrNgCItPzoNA2JIw6IH6Hhz58ckA8w0LndPgewpxmVvE70WXmNYXQ2YoYMVCDSAICLemdNddM4+HTgzh32f7xN6M25qjhRQW8jhgzwtsN0gBBDVztP7qPh1wMOCO1z7PryvfWvPttW1W5jf/UBZvaaHb4sCDL7SOfiX6BWJ3KVTdW8EVxWPBPTc0FHGnHz+pWgI6ad23v18xXY1CILfuhdgb2wl4FaxkmfuLmo+6Zf8gA2J3kecJLHi5+ZnnZWALBMYfndso9PKqwAM+bHFJb/GD+jjIqTPP5y8Epz191XqAZJYfnhp8Gft+wTjhnaxC+5P6gWfg4i6jG22TyUZXl/tfBzEKywmbgRF3VfJQH4o/jTvcWs8AorbJEJ4WfbaZi4mV9yZ4kAMzNR5GJbm+sNLx8WmmWfUCSHxxXgFQMA5PDPQuCWW2j4jI93yiyvGQlftqkAlY58/QaMr6Zq+q8PNxkOq1gAEql9zKmAbHAGTG0hLrZ1Axd1p+oFkH3CZIYVNiw6gN67469R35AA8Hf03lUsgJelAkIqA30P7sEv49fhzG0eTo39CCdG94I/tmPxAA4HQOm8AFluAHJdQ6D2DIN6bgTywRgZoD+lPelPF6HSgcnHJT75KHf23g25506o0J8ues5PFdaefQirFgogDyRW5QZG16qDcU/29OVC7txvsipKudxAvJQPJ6DSajj+hAyQ1ib0AKp53bsXqtp1aA3ReZ2gNUz+cyuQ1r5fqgDqYOIgESA8Dq8E0sU/SMH7Uhp0J+sHUIVroIZ+NxA+PgriyErKiMS/YeV0JVJasjeplbrua3D0rgbttzU4eKsAe8YK8O2s6wVQyoPbcR6yx/DQRiDXcwVUfgTUUAzPQlINxw8ZDt+f1mzzmYPFa6H4hDqYsBmZgcmlOgP5cHzifwAwpdmXbAuFE4gyW/UCUJYsWbJEvcj6DyJqm9QHBKhJAAAAAElFTkSuQmCC" alt='niños'></img>
                              <span class="nav-text"  onClick={CuidoNiñosCen}>
                                Form Cuido niños
                              </span>
                          </a>
                        
                      </li>
                      <li class="has-subnav">
                          <a href="#">
                             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRklEQVR4nO2Yb0gTYRzHn94Uvgik7UWE2yBIkbJ8ERS9Knrjn+lmpCsixc13EVnQy+xFIBTlnbSonNCbXoRtu9uuDJQZEZU3lUWWRGCBEO0qG+ly91zaL+7mQFebt7sbZ3Rf+L7ac899P8/zG98xhAwZMmQon3wVNNFfTv3sr6Ahp8vFz6ketB7lK6dx3vAVaYvr0HrUPw9w+/DwQH9lKD9AZQj6DkXuaf7y5oHmEnvYbm6kGzcr3YMc4+vIKIa13MumarRNjxCyB52v7JQTRNdTDs5OOe7WUo6qQvboGeOPygEgWb5Je4BA06kMwAqQJXvQeRkB2iBnD2IUt8oB6GHxCc0BagZrNtkpx2Q2hGgvvecLhFFSMoNeQxiRwKBd2XuQUf6MzBE6jYqhev+RHfVB58dsgAbKCVNhEwCDVnoRGOSFAbQx8zzBYlLWCEXxNVQsnR86sK2L3s81UI5VEJfofdkAGUcyECSLwzIBqKIBAINuisE+MyXAhLbDrdBuuELvhTuhnbkAAMLouvgsEcXv5H2J8dvihH+IqoBBSzmD5vbi5HDbQTGcL4bh5Schp30xDATL//Kyya3aAzCoV0F4yS9GLjwSASIfBBCE3I68F6RbIEbx8WIAvFEKcP/p8JwYbHoW5wWY/poeIyKKmWIAzCsJPzdohd7oAvTFBEjh/DeQwoK0jojyi96JBZvWAHNKAB4/IaRTfT6T//SFZT+bWb4FFpO6j1DqwRa4MToL3nEM3xfWDi8IgrROXE+w/I+r42DWDiDdsAUBTIyclU5zaFre6QvLFtenb4E/pzq439xS5ze5+IDZBXrab3LxQbOrVgGAq0vv8IEMhNnV9T8CtKyLEQqYWlKKRiijuMUd46we0MNxizuG1Iqzeii9ADirR/0vVM7qIZS8HL4dW2WFAIRqgLilvVMvgLilvVM9QJnbqRtAmdupGoCzdVTrNkK2jmrVAAlbW6leAAlbWynSQnGLJ7HWy+Yvtv4ROpeT3a0y5t+T0CR8IV0gB0JOeE6rDlDSBfkg5Ibn0tbuX4pCu+BvEAWGB006QE0XrIRQEB406QC1XZDsPilZtw5Q2wWqbNOgA9R2gRontOoAQ4YMGULF1G/o1yfuQl/lPAAAAABJRU5ErkJggg==" alt='alimentos'></img>
                              <span class="nav-text" onClick={FormAlimentos}>
                                Form para alimentos (DAF)
                              </span>
                          </a>
                          
                      </li>
                      <li class="has-subnav">
                          <a href="#">
                       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETUlEQVR4nO3Ua0xbZRzH8b7c5gXn/YZQKNCVts63JniBaZGODk0w22LEsaggBINvIKvOuKmozHmdOoWWroNCYUPnxoZzgyzxzbIozoGtI2MXeh0dt7LBNPmb5zk9pafn37WFPqAJJ/mEUE7I9/fkAYlk6Vl6lp45P48c9fWuPnoFgn4SepjoJnxCRzjqANURX49kMR4senWk6G5hdNBhzuIMmGe0+rAPVNTI4gy40RWJJVpFdHEWPL7q16ndu87OQCLo+6auys1+7YLFv3zSX1pvm4ad9pl5q7dNw6P7/bDK7B9MMcIy5vEv/DKp3PrH9D91f16HRNhwYorEU3Kz/y2m8a+cghXVv10be6f/OiRCze8zoGz2g3zPJMc0cTXLOJrKbMCmk9dObTn9NyRK3qFJyDJNCGSaxjuYDVB3+SbVyH+QUMpDERy8DNlhMpsmRDKM4zPMBiQiOvvHWRnGcRS7AaHRXXOLJhQBMsMYitmAyNFIeIRoxYFZsgUfEC36YPRoxQEvteoHL6Q3jqLYDphPdCCcl9YwimI2YC7R/GmLfO8F6XdXUOwGxHCvo0UT8oDUb30opgNIsLrVDk9X6kH3/EZ4qkIPaostYrSqxUbfIe+uqdCDstnGDej0QMpuH4rZAP6U88pqoaf3BBzr6YXCwkLIK69FT5uE5pXVCN8tq6XxxEPfjKAYDuCuR/6656D75+PQfew4FBQU0O+xK0Jg72Z1eiBrvweSvx5BMRvAn+4Tm98AjUYT9HhptSCaP2GC/Cz03cdKq2k88eBXl1HMB6jMA5Dz0uuw5hkt/ao0D4jC6Sl3eiDb1A85JVXcuyVV9PvMfR7qgV1eFLsBYdcjUjR/wuH48Mx9bur+L70oZgOwaHmc0VQH574vPChmAwaM7VBi7Reddn55LRUenV9eA5ryGkF0RocbXrScgQFDO9z7uRvFbMBYwx6wG62iU9YVr4eioiJQmG3B08422+hnuuINNDqUvdEK5Hfd85kbxXTAXwar6KRzK7eCTqeD3Io3QbHXDgqzHXJf09PPnqx8mwtvn3U2MODuT10oZgMGDW2wue2M6F4rDX2Q/2wxaLVaAfKZoqEvGC6jXLCp+TQMNrbBXZ+4UMwGRPpjJCesaOqHnDI9aNauo3Je3ULj+WiZVezOnU4UwwHCaIGQK5Jxg2hZmwvSA+742IFiNyBqtDtqdKjbdzhQzAbEFW3Fo9NbOWmtTlhZP4xiNyDsjzHe6PRWJw3n3fbRJRSzAbHc62jRaZZZSR9eQrEbEMO9Dr0iWDQhJVqccOsHF1FMB8wrOhDOu6XuIorZgHijQ09byAHSZgfc/P4FFLsBMdzraNGpIW567zyK2YD4o52i6KC9izBA2uIcjim6JXI0L7lpGFa8OyS2/dwwuwEW11qpxeGM9YqER6cEJJsckLTjPCzfPiSwbNuQd/m2czrJf/lJqruwMhLJ0iP5/z3/AkOL+VuHwQztAAAAAElFTkSuQmCC" alt='leche'></img>
                              <span class="nav-text" onClick={FormLeche}>
                              Form para leche
                              </span>
                          </a>
                          
                      </li>
                      <li class="has-subnav">
                          <a href="#">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYUlEQVR4nO2X/2/UZBzHqz/cf4BBsZ1bhovEOHXjy8QYom7Ps9sg0etzWULcWDvcYfCiIFt7ho3EOBD4YUbOLWDUoZENQoKODUIwkAhhiNHNBAWNGhPY9fZFjeK8jd19zHOzW9cv293W9oi5T/JOdm2fft6vp++nT8cw2cpWtmwr2V/6sEzQLolHl2Qe35QJmpQJBqpGH1rH3Kn1GvEulQg+rpq10Dnmjp11ns72nOanxONbEkFXJYL3S89X5GXaO7Oj6tn7UjZvEBqTCd6SSf93SQSfWZj5GUmkbGtG3Df6y3yLNS9PxWoi5EePuw4g87jfFgBCnwI676r5kB+vScfgPgHD9wcr4fzeCmsIP17pGoDM47dTMb6zCsPZFi9MnFwPcGpK9LdFlNpcBEDX5zPfsd0Lo0dnjGtlCsHjm/TF4MqmlUpczIxrZRan10lpruMAEkEbzIw3/ReX25q4zCfZeB/ecQCZoFA6cUkToMVxAImg9/SNtaYOVOdDuGa5wazZcVn/JuJxlwsAxt030TuT+XBNPrxrAqA/TsfIBgB0wQ2Ay/rGo13etOMz0mX2OkU/uQCAruobD4RL0wb4NlxqtgaijgPIBP+qbxwOrE0boP2ltWafFL87DiARPKpv7H+iEJRPylM2/9tRL1Q9+agZwN8uAKBxfeMNxY9AiKyEie75N7B473p4Y+Pq5BjZuAYmHQcI8eXVEo//0QNQ7fSvAjiJrAF6vbB305rp6+XZsz8uEfwi40ZJpKxIuxZUQ1RwyANw5EGAE08B9JQD9FYAfLYOoLMA4KBn1rWy5jtIIqiEcbNkgpfQf9QNAO3MnNIDSARfDD2H7mUyUc2EeBp9ZYeDhSXQWVAJ13KrId66xNI8PXct9wU4UlAJdEyDD3XQezCZqkGudoXCCt1RTgRVI4/xkDjgMZinx+g57bURrvbTwRzxoYyYV1ghEGXFca0hLURsWw4kWj1J0b/15qfFCjGFEza7an6IE4OmZhYl4WVXzCuc8IzCCXG7ARROiEe4uqcdNR/JC9yjsMKg/bMvqnFSojk1Sx0DiLLix2qz4aJ6iLU1QKKvKalYeyOMlAQW/yRY8bAz5u8X8xVOuK2aj19oAhjYNUuJi03Jc4uLkjg5tGzTctsBFFZ4R21CZ15vXlUs3GBHnFptNQ9M893a7NPIWAHE+5ptWNDiDdrTNoDIstrV2gZzAYz1t8ArnVH4YFsP/LIiuGCIYVYotg1AYcVXtTenC9YK4EpfJ9T1jCUV7BqGM762BQEMcWLQPgBO7NDenL5t6ILVm//r6z2w43R0GkDVvj1X4IfC7WnGSPjQNoAoK5wzPOKievjmi49grH93UnTmzcyr2np8FLo3vg9KTl2qe8LntgEonPCjWZPQoZ8tDVvpzdYB+K5YSuUJXLcNIMqJt8yaHKubyXs6Cpz4Izk28sDmuTa0P20DsPr2Gcyrh/27v1wQRHJtvPUV3MjfYrmh2QaQrWz9j+tfRPfLcoVD7jIAAAAASUVORK5CYII=" alt="mamita"/>
                              <span class="nav-text" onClick={ForMadreLactante}>
                              Form para Madres Lactantes
                              </span>
                          </a>
                    </li>
                          
                      <li>
                         <a href="#">
                              <i class="fa fa-map-marker fa-2x"></i>
                              <span class="nav-text">
                                  Member Map
                              </span>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                             <i class="fa fa-info fa-2x"></i>
                              <span class="nav-text">
                                  Documentation
                              </span>
                          </a>
                      </li>
                  </ul>
      
                  <ul class="logout">
                      <li>
                         <a href="#">
                               <i class="fa fa-power-off fa-2x"></i>
                              <span class="nav-text">
                                  Logout
                              </span>
                          </a>
                      </li>  
                  </ul>
              </nav>
     
      <div>
    <h1 className='holi'>Bienvenido a la página oficial del Cen-cinai</h1>

<img className='mocosos' src={mocosos} alt="niños" />
</div>
    </div>
  )
}

export default Main;
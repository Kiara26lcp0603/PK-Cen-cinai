// import logo from './logo.svg';
import './App.css';
import './pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/main/main';
import Expedientes from './pages/Expedientes/Expedientes';
import Registros from './pages/Registros/Registros';
import Leche_daf from './pages/Leche_daf/Leche_daf';
import Cuido from './pages/Cuido/Cuido';
import PendienteCuido from './pages/PendienteCuido/PendienteCuido';
import FormAlimentos from './pages/FormAlimentos/FormAlimentos';
import FormLeche from './pages/FormLeche/FormLeche';
import ForMadreLactante from './pages/ForMadreLactante/ForMadreLactante';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/main",
      element: <Main></Main>
    },
     {
      path: "/expedientes",
      element:<Expedientes></Expedientes>
    },
    {
     path: "/Registros",
     element: <Registros></Registros>
    },
    {
    path: "/Leche_daf",
    element: <Leche_daf></Leche_daf>
    },
    {
    path: "/Cuido",
    element: <Cuido></Cuido>
    },
    {
    path:"/PendienteCuido",
    element: <PendienteCuido></PendienteCuido>
    },
    {
     path: "/FormAlimentos",
     element: <FormAlimentos></FormAlimentos>
    },
    {
      path: "/FormLeche",
      element: <FormLeche></FormLeche>
    },
    {
    path: "/ForMadreLactante",
    element: <ForMadreLactante></ForMadreLactante>
    }

    
  ])


  return (
    <div className="App">

      <RouterProvider router={router}>
      </RouterProvider>
     
    </div>
  );
}

export default App;

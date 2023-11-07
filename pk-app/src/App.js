// import logo from './logo.svg';
import './App.css';
import './pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/main/main';
import Expedientes from './pages/Expedientes/Expedientes';

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
    }
  ])


  return (
    <div className=" container App">

      <RouterProvider router={router}>
      </RouterProvider>
     
    </div>
  );
}

export default App;

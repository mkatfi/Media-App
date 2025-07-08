
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import './index.scss'; // Import global styles
import { useRoutes } from "react-router-dom";

function App() {
   const routes = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    // { path: "*", element: <NotFound /> },
  ]);
  return (
    <div className="app">
      {routes}
    </div>  
  );
}

export default App;

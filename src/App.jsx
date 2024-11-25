import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader';
import DashboardFooter from './components/DashboardFooter';
import DashboardMain from './components/DashboardMain';
import Login from './components/Login';
import VistaOpcion from './components/VistaOpcion';
import Proceso from './components/Proceso';
import Macroprocesos from './pages/Macroprocesos';
import './styles/Global.css';

// Componente para proteger las rutas
function ProtectedRoute({ element }) {
  const isAuthenticated = localStorage.getItem('authToken'); // Verifica si el token existe
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router basename="/practicas-preprofesionales"> {/* Usamos basename para trabajar con la subcarpeta en GitHub Pages */}
      <Routes>
        {/* Ruta para el Login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta protegida para el Dashboard, si no está logueado, redirige a /login */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              element={
                <>
                  <DashboardHeader />
                  <DashboardMain />
                  <DashboardFooter />
                </>
              }
            />
          }
        />

        {/* Ruta para las opciones dentro del Dashboard */}
<<<<<<< HEAD
        <Route path="/dashboard/:opcion/" element={
=======
        <Route path="/dashboard/:opcion" element={
>>>>>>> caa59acae480c5b9d3acc737c01b0eab45c98b6d
          <ProtectedRoute
            element={
              <>
                <DashboardHeader />
                <VistaOpcion />
                <DashboardFooter />
              </>
            }
          />
        }>
<<<<<<< HEAD
          {/* Ruta para los procesos dentro de cada opción */}
=======
          {/* Ruta para un proceso específico dentro de la opción */}
>>>>>>> caa59acae480c5b9d3acc737c01b0eab45c98b6d
          <Route path=":proceso" element={<ProtectedRoute element={<Proceso />} />} />
        </Route>

        {/* Ruta para la página Macroprocesos, protegida */}
        <Route path="/Sistemas/Macroprocesos" element={<ProtectedRoute element={<Macroprocesos />} />} />
        
        {/* Ruta raíz, redirige al login si no hay un token de autenticación */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

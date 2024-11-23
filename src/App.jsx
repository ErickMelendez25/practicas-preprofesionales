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
  return isAuthenticated ? element : <Navigate to="/practicas-preprofesionales" replace />; // Redirige a la subcarpeta
}

function App() {
  return (
    <Router basename="/practicas-preprofesionales"> {/* Usamos el basename para trabajar con la subcarpeta en GitHub Pages */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Ruta para Dashboard - Protección con ProtectedRoute */}
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

        {/* Ruta para la vista de cada opción seleccionada dentro del Dashboard */}
        <Route path="/dashboard/:opcion" element={
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
          <Route path=":proceso" element={<ProtectedRoute element={<Proceso />} />} />
        </Route>

        {/* Otra ruta protegida para Macroprocesos */}
        <Route path="/Sistemas/Macroprocesos" element={<ProtectedRoute element={<Macroprocesos />} />} />
      </Routes>
    </Router>
  );
}

export default App;

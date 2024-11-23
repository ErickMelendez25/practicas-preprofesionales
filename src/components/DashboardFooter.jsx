import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para las rutas
import { BASE_URL } from '../config';  // Importar la constante BASE_URL
import '../styles/DashboardFooter.css';

function DashboardFooter() {
  const [showText, setShowText] = useState(false); // Estado para manejar la visibilidad del texto
  const fullText = "El mapeo de procesos sigue estándares de ISO 9001 y 21001, ICACIT y SINEACE";

  useEffect(() => {
    // Hacemos que el texto aparezca después de un pequeño retraso
    const timer = setTimeout(() => {
      setShowText(true); // Mostrar el texto después de 1 segundo
    }, 1000); // Retraso de 1 segundo

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, []);

  return (
    <footer className="dashboard-footer">
      {/* Solo en /dashboard mostramos las opciones en el pie de página */}
      {window.location.pathname === "/dashboard" && (
        <div className="footer-options">
          {/* Enlaces a las opciones que mencionaste */}
          <Link to={`${BASE_URL}/seguridad-salud-trabajo`} className="footer-item">Seguridad y salud en el trabajo</Link>
          <Link to={`${BASE_URL}/gestion-talento-humano`} className="footer-item">Gestión del talento humano</Link>
          <Link to={`${BASE_URL}/informacion-comunicacion`} className="footer-item">Información y comunicación</Link>
          <Link to={`${BASE_URL}/bienestar-organizacional`} className="footer-item">Bienestar organizacional</Link>
          <Link to={`${BASE_URL}/consejeria-academica`} className="footer-item">Consejería académica</Link>
        </div>
      )}

      {/* El texto con animación de desvanecimiento */}
      {showText && (
        <div className="footer-text">
          <h3>{fullText}</h3>
        </div>
      )}
    </footer>
  );
}

export default DashboardFooter;

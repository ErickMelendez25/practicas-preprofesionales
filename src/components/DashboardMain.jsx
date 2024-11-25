import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para las rutas
import { BASE_URL } from '../config';  // Importar la constante BASE_URL
import '../styles/DashboardMain.css';

const DashboardMain = () => {
  // Estado para controlar la visibilidad de la imagen de fondo
  const [backgroundVisible, setBackgroundVisible] = useState(true);

  // Lista de opciones
  const options = [
    { name: "Admisión", route: "/admision" },
    { name: "Nivelaciones de estudiantes", route: "/nivelaciones" },
    { name: "Matrícula", route: "/matricula" },
    { name: "Diseño curricular", route: "/diseno-curricular" },
    { name: "Convalidaciones", route: "/convalidaciones" },
    { name: "Enseñanza-Aprendizaje", route: "/ensenanza-aprendizaje" },
    { name: "Prácticas preprofesionales", route: "/practicas-preprofesionales" },
    { name: "Proyección social", route: "/proyeccion-social" },
    { name: "Extensión cultural", route: "/extension-cultural" },
    { name: "Servicios educacionales", route: "/servicios-educacionales" },
    { name: "Seguimiento al estudiante", route: "/seguimiento-estudiante" },
    { name: "Tutoría", route: "/tutoria" },
    { name: "Internacionalización", route: "/internacionalizacion" },
    { name: "Investigación", route: "/investigacion" },
    { name: "Grados y títulos", route: "/grados-titulos" },
    { name: "Gestión de egresados", route: "/gestion-egresados" }
  ];

  // Función para manejar el clic en una opción
  const handleOptionClick = () => {
    setBackgroundVisible(false); // Oculta la imagen de fondo al hacer clic
  };

  return (
    <div className={`dashboard-main ${!backgroundVisible ? 'hide-background' : ''}`}>
      {/* Si estamos en la página principal de /dashboard, mostramos las opciones */}
      {window.location.pathname === `${BASE_URL}/dashboard` ? (
        <>
          <div className="options-section">
            <div className="options-grid">
              {options.map((option, index) => (
                <Link
                  key={index}
                  to={`${BASE_URL}${option.route}`} // Usamos BASE_URL aquí
                  className="option-btn"
                  onClick={handleOptionClick} // Cambia la visibilidad de la imagen al hacer clic
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="welcome-message">
          <h2>Welcome to: {window.location.pathname.replace(`${BASE_URL}/dashboard/`, '').replace('-', ' ').toUpperCase()}</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardMain;

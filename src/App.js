import React, { useState } from 'react';
import Estudiante from './components/Estudiante';
import './App.css';

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [materia, setMateria] = useState("");
  const [calificacion, setCalificacion] = useState("");

  const agregarEstudiante = (nuevoEstudiante) => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    agregarEstudiante({ nombre, materia, calificacion });
    setNombre("");
    setMateria("");
    setCalificacion("");
  };

  return (
    <div className="contenedor">
      <div className="registro">
        <h1>Registro de Estudiantes</h1>
        <form onSubmit={manejarEnvio}>
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nombre"
          />
          <input
            value={materia}
            onChange={e => setMateria(e.target.value)}
            placeholder="Materia"
          />
          <input
            value={calificacion}
            onChange={e => setCalificacion(e.target.value)}
            placeholder="Calificación"
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
      <div className="lista-estudiantes">
        <h2>Lista de Estudiantes</h2>
        <ul>
          {estudiantes.map((estudiante, index) => (
            <li key={index}>
              <Estudiante
                nombre={estudiante.nombre}
                materia={estudiante.materia}
                calificacion={estudiante.calificacion}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

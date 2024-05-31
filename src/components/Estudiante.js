import React from 'react';

const Estudiante = ({ nombre, materia, calificacion }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Materia: {materia}</p>
      <p>Calificación: {calificacion}</p>
    </div>
  );
};

export default Estudiante;

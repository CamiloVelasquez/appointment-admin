import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, deleteAppointment }) => {
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => deleteAppointment(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

Cita.propType = {
  cita: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
};

export default Cita;
